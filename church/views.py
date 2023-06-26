from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, BasePermission, SAFE_METHODS

from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q

from .models import Church, FAQ,FormSubmission
from .serializers import ChurchSerializer, FAQSerializer, FormSubmissionSerializer
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
        'api/faqs/',
        'api/faqs/<id>/',
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
    serializer_class = ChurchSerializer

    def get_queryset(self):
            query = self.request.GET.get('q')
            if query:
                return Church.objects.filter(
                    Q(church_name__icontains=query) |
                    Q(address__icontains=query) |
                    Q(parish__icontains=query)
                )
            else:
                return Church.objects.all()

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


    # FAQ views

class FAQListCreateView(generics.ListCreateAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer

class FAQRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer

# support form view
class FormSubmission(APIView):
    def post(self, request):
        serializer = FormSubmissionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)