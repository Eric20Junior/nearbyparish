from django.urls import path
from .views import ListChurch, CreateChurch, ChurchDetail, UpdateChurch, DeleteChurch, getRoutes

urlpatterns = [
    path('', getRoutes),
    path('churches/', ListChurch.as_view(), name='list-church'),
    path('create/', CreateChurch.as_view(), name='create-church'),
    path('details/<int:pk>/', ChurchDetail.as_view(), name='church-Detail'),
    path('update/<int:pk>/', UpdateChurch.as_view(), name='update-church'),
    path('delete/<int:pk>/', DeleteChurch.as_view(), name='delete-church'),

]