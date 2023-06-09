from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, BasePermission, SAFE_METHODS

from .models import Church
from .serializers import ChurchSerializer
# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'account/api/token/',
        'account/api/token/refresh/',
        'account/register/',
        'api/churches/',
        'api/create/',
        'api/details/<id>/',
        'api/update/<id>/',
        'api/delete/<id>/',
    ]

    return Response(routes)


class PostUserWritePermission(BasePermission):
    """
    This permission only allows creators to edit and delete a profile.
    """

    message = 'Editing and deleting a profile is restricted to the creator only'

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in SAFE_METHODS:
            return True

        # Instance must have an attribute named `User`.
        return obj.user == request.user


class ListChurch(generics.ListAPIView):
    """
    List all churches.
    """
    permission_classes = [IsAuthenticated]

    queryset = Church.objects.all()
    serializer_class = ChurchSerializer

class CreateChurch(generics.CreateAPIView):
    """
    List all churches.
    """
    permission_classes = [IsAuthenticated]

    queryset = Church.objects.all()
    serializer_class = ChurchSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ChurchDetail(generics.RetrieveAPIView):
    """
    Retrive a church
    """

    permission_classes = [IsAuthenticated]

    queryset = Church.objects.all()
    serializer_class = ChurchSerializer

class UpdateChurch(generics.UpdateAPIView, PostUserWritePermission):
    """
    Update a church
    """

    permission_classes = [PostUserWritePermission]

    queryset = Church.objects.all()
    serializer_class = ChurchSerializer

class DeleteChurch(generics.DestroyAPIView, PostUserWritePermission):
    """
    Delete a church
    """

    permission_classes = [PostUserWritePermission]

    queryset = Church.objects.all()
    serializer_class = ChurchSerializer