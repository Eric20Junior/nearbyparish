from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

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
        'api/churches/<id>/',
    ]

    return Response(routes)


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

class ChurchDetail(generics.RetrieveAPIView):
    """
    Retrive a church
    """

    permission_classes = [IsAuthenticated]

    queryset = Church.objects.all()
    serializer_class = ChurchSerializer

class UpdateChurch(generics.UpdateAPIView):
    """
    Update a church
    """

    permission_classes = [IsAuthenticated]

    queryset = Church.objects.all()
    serializer_class = ChurchSerializer

class DeleteChurch(generics.DestroyAPIView):
    """
    Delete a church
    """

    permission_classes = [IsAuthenticated]

    queryset = Church.objects.all()
    serializer_class = ChurchSerializer