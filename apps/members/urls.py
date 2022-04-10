from django.urls import path

from .views import (MembersList, MemberDetail,
                    MemberReceiptsList,
                    MemberCampaignsList,
                    MemberCampaignDetail,Recent_Member,getCampaignbyMemberId)

urlpatterns = [
    path('members/', MembersList.as_view()),
    path('members/<int:pk>/', MemberDetail.as_view()),
    path('members/<int:pk>/receipts/', MemberReceiptsList.as_view()),
    path('members/<int:member_id>/campaigns/', getCampaignbyMemberId),
    path('members/<int:pk>/campaigns/<int:campaign_id>/orders/',
         MemberCampaignDetail.as_view()),
    path('members/recent_member/',Recent_Member.as_view())
]
