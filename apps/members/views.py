import logging

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics, mixins
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from .filters import MemberFilter
from .models import Member
from .permissions import MemberPermission
from .serializers import MemberSerializer, MemberCampaignSerializer
from .schema import list_campaigns_schema
from apps.receipts.models import Receipt, Store, OrderLine
from apps.receipts.serializers import ReceiptSerializer, OrderLineDetailSerializer
from apps.receipts.filters import ReceiptFilter
from apps.campaigns.models import Campaign
from apps.campaigns.serializers import CampaignSerializer
from backend.permissions import IsSuperUserOrAdmin
from backend.mixins import LookupMixin
from backend.schema import list_schema
from datetime import datetime,timedelta,date

logger = logging.getLogger('django')

class MembersPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_no'
    max_page_size = 100

@list_schema(MemberFilter)
class MembersList(generics.ListCreateAPIView):
    serializer_class = MemberSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    pagination_class = MembersPagination
    filterset_class = MemberFilter

    def get_queryset(self):
        if 'asc' in self.request.GET or 'des' in self.request.GET:

            if 'asc' in self.request.GET:
                if IsSuperUserOrAdmin().has_permission(self.request, MembersList):

                    return Member.objects.all().order_by('name')

                return Member.objects.filter(organization=self.request.user.organization_id).order_by('name')
            else:
                if IsSuperUserOrAdmin().has_permission(self.request, MembersList):

                    return Member.objects.all().order_by('-name')

                return Member.objects.filter(organization=self.request.user.organization_id).order_by('-name')
        
        else:
            if IsSuperUserOrAdmin().has_permission(self.request, MembersList):

                return Member.objects.all().order_by('-created_at')

            return Member.objects.filter(organization=self.request.user.organization_id).order_by('-created_at')


class MemberDetail(mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.DestroyModelMixin,
                   generics.GenericAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    permission_classes = [IsAuthenticated & MemberPermission]

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

    def perform_destroy(self, instance):
        instance.is_active = False
        instance.save()

        upd_orders = OrderLine.make_anonymous(instance.id)
        logger.info(f"Member.id={instance.id} is deactivated."
                    f" Members data is anonymous now (amount of orders - {upd_orders}).")
        return instance


from rest_framework.views import APIView
from rest_framework.response import Response
class Recent_Member(APIView):
    def get(self, request):

        today = date.today()
        month_ago = today-timedelta(days=30)
        print(today)
        print(month_ago)

        members = Member.objects.filter(created_at__gt=month_ago)
        print(members)
        serializer = MemberSerializer(members, many=True)
        return Response(serializer.data)

@list_schema(ReceiptFilter)
class MemberReceiptsList(LookupMixin, generics.ListAPIView):
    serializer_class = ReceiptSerializer
    # permission_classes = [IsAuthenticated & MemberPermission]
    filter_backends = [DjangoFilterBackend]
    filterset_class = ReceiptFilter
    _model = Member

    def get_queryset(self):
        self.get_object()
        member_id = self.kwargs.get('pk')
        stores = Store.objects.filter(merchant__organization_id=self.request.user.organization_id)
        receipts = Receipt.objects.filter(orderline__store_id__in=stores,
                                          orderline__member_id=member_id)
        return receipts


@list_campaigns_schema
class MemberCampaignsList(LookupMixin, generics.ListAPIView):
    serializer_class = CampaignSerializer
    # permission_classes = [IsAuthenticated & MemberPermission]
    _model = Member

    def apply_filters(self) -> dict:
        serializer = MemberCampaignSerializer(data=self.request.GET)
        serializer.is_valid(raise_exception=True)
        return serializer.data

    def get_queryset(self):
        filters = self.apply_filters()
        self.get_object()
        member_id = self.kwargs.get('pk')
        return Campaign.list_member_campaigns(member_id,
                                              self.request.user.organization_id,
                                              filters['order'],
                                              filters['limit'])

from rest_framework.decorators import api_view, permission_classes
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def getCampaignbyMemberId(request, member_id):
    from apps.audience.models import Audience
    from apps.audience.serializers import AudienceSerializer
    member = Member.objects.get(pk=member_id)
    audience = Audience.objects.filter(members=member)
    print(audience)
    
    camps = Campaign.objects.filter(audience__in=audience)
    paginator = PageNumberPagination()
    # paginator.page_size = 10
   
    result_page = paginator.paginate_queryset(camps, request)
    serializer = CampaignSerializer(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)
    # serailzed_data = CampaignSerializer(camps,many=True)
    # return Response(serailzed_data.data)


class MembersCampaignPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_no'
    max_page_size = 100

@list_campaigns_schema
class MemberCampaignDetail(LookupMixin, generics.ListAPIView):
    serializer_class = OrderLineDetailSerializer
    # permission_classes = [IsAuthenticated]
    pagination_class = MembersCampaignPagination


    def apply_filters(self) -> dict:
        serializer = MemberCampaignSerializer(data=self.request.GET)
        serializer.is_valid(raise_exception=True)
        return serializer.data

    def get_queryset(self):
        self.get_objects() # fetch and validate member and campaign
        filters = self.apply_filters()
        return Campaign.list_member_campaign_activities(
            self.kwargs.get('pk'),
            self.kwargs.get('campaign_id'),
            filters['limit']
        )
