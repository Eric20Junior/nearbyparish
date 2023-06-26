from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, generics
from user.api.serializers import RegistrationSerializer
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken

from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser, AllowAny
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .serializers import UserSerializer

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class UserList(generics.ListCreateAPIView):
    # permission_classes = [IsAdminUser]
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetails(generics.RetrieveUpdateDestroyAPIView):
    # permission_classes = [IsAdminUser]
    queryset = User.objects.all()
    serializer_class = UserSerializer


class AdminLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        # Authenticate the user
        user = authenticate(username=username, password=password)

        if user is not None:
            # Check if the user is an admin
            if user.is_staff:
                # Generate the access token
                access = AccessToken.for_user(user)
                refresh = RefreshToken.for_user(user)

                return Response({
                    'access': str(refresh.access_token),
                    'refresh': str(refresh),
                    'user': str(user),
                    })
            else:
                return Response({'error': 'User is not an admin'}, status=403)
        else:
            return Response({'error': 'Invalid credentials'}, status=401)


@api_view(['POST'])
def registerView(request):
    """Resgister a new user"""

    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)

        data = {}
        
        if serializer.is_valid():
            account = serializer.save()

            data['response'] = "Registration Successfull!"
            data['username'] = account.username
            data['email'] = account.email


            refresh = RefreshToken.for_user(account)
            data['token'] = {
                                'refresh': str(refresh),
                                'access': str(refresh.access_token),
                            }

        else:
            data = serializer.errors
            
        return Response(data, status=status.HTTP_201_CREATED)