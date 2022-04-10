from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics, mixins
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .filters import CampaignFilter
from .models import Campaign
from .serializers import CampaignSerializer, CampaignDuplicateSerializer
from .permissions import CampaignPermission
from backend.permissions import IsSuperUserOrAdmin
from backend.schema import list_schema
from rest_framework.pagination import PageNumberPagination

class CampaignListPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_no'
    max_page_size = 100


@list_schema(CampaignFilter)
class CampaignList(generics.ListCreateAPIView):
    serializer_class = CampaignSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = CampaignFilter
    pagination_class = CampaignListPagination
    is_raised_err = False

    def get_queryset(self):
        from django.db.models import Q
        if IsSuperUserOrAdmin().has_permission(self.request, CampaignList):
            queryset = Campaign.objects.all()

            if 'q' in self.request.GET:

                if self.request.GET['q'].isdigit():
                    queryset = queryset.filter(Q(name__icontains = self.request.GET['q']) | Q(id = int(self.request.GET['q'])))
                else:
                    queryset = queryset.filter(Q(name__icontains = self.request.GET['q']))

            
            # if 'is_active' in self.request.GET:
            #     if self.request.GET['is_active'] == 1:
            #         queryset = queryset.filter(offer__is_active = True)
            #     else:
            #         queryset = queryset.filter(offer__is_active = False)
            # if 'is_archive' in self.request.GET:
            #     if self.request.GET['is_archive'] == 1:
            #         queryset = queryset.filter(offer__is_archive = True)


        else:
            queryset = Campaign.objects.filter(
                organization=self.request.user.organization_id)
            
            if 'q' in self.request.GET:
                if self.request.GET['q'].isdigit():
                    queryset = queryset.filter(Q(name__icontains = self.request.GET['q']) | Q(id = int(self.request.GET['q'])))
                else:
                    queryset = queryset.filter(Q(name__icontains = self.request.GET['q']))
            # if 'is_active' in self.request.GET:
            #     if self.request.GET['is_active'] == 1:
            #         queryset = queryset.filter(offer__is_active = True)
            #     else:
            #         queryset = queryset.filter(offer__is_active = False)
            # if 'is_archive' in self.request.GET:
            #     if self.request.GET['is_archive'] == 1:
            #         queryset = queryset.filter(offer__is_archive = True)

        return queryset.select_related('offer', 'audience')

    def head(self, request, *args, **kwargs):
        return Response({})

    def handle_exception(self, exc):
        self.is_raised_err = True
        return super().handle_exception(exc)

    def finalize_response(self, request, response, *args, **kwargs):
        if self.request.user.is_authenticated and not self.is_raised_err:
            response['X-Total-Count'] = self.\
                    filter_queryset(self.get_queryset()).count()
        return super().finalize_response(request, response, *args, **kwargs)


class CampaignDetail(mixins.RetrieveModelMixin,
                     mixins.UpdateModelMixin,
                     mixins.DestroyModelMixin,
                     generics.GenericAPIView):
    queryset = Campaign.objects.all().select_related('offer', 'audience')
    serializer_class = CampaignSerializer
    permission_classes = [IsAuthenticated & CampaignPermission]

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class CampaignDuplicate(generics.GenericAPIView):
    """Duplicate campaign with the same offer and audience."""
    queryset = Campaign.objects.all().select_related('offer', 'audience')
    serializer_class = CampaignDuplicateSerializer
    permission_classes = [IsAuthenticated & CampaignPermission]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer()
        campaign = serializer.create(self.get_object())
        return Response(self.get_serializer_class()(campaign).data)
