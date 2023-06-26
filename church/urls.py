from django.urls import path
from .views import ListChurch, CreateChurch, ChurchDetail, UpdateChurch, DeleteChurch, getRoutes, FAQListCreateView, FAQRetrieveUpdateDestroyView, FormSubmission

urlpatterns = [
    path('', getRoutes),
    path('churches/', ListChurch.as_view(), name='list-church'),
    path('create/', CreateChurch.as_view(), name='create-church'),
    path('details/<int:pk>/', ChurchDetail.as_view(), name='church-Detail'),
    path('update/<int:pk>/', UpdateChurch.as_view(), name='update-church'),
    path('delete/<int:pk>/', DeleteChurch.as_view(), name='delete-church'),

    path('faqs/', FAQListCreateView.as_view(), name='faq-list-create'),
    path('faqs/<int:pk>/', FAQRetrieveUpdateDestroyView.as_view(), name='faq-retrieve-update-destroy'),

    path('support/', FormSubmission.as_view(), name='support-form'),
    # path('support/<int:submission_id>/respond/', respond_to_submission, name='respond-to-submission'),
]