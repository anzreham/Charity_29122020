from django.shortcuts import render
from rest_framework.views import APIView
from .models import User, Client, Charity, Category
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login, logout
from .serializers import CategorySerializer,UserSerializer, UserSessionSerializer, ClientProfileSerializer, CharityProfileSerializer

class CategoryViewSet(APIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get(self, request, format=None):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
    def post(self, request, format=None):
        try:
            if request.user.is_superuser:
                serializer = CategorySerializer(data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors)
            return Response({"errors": "Not allowed"})
        except Exception as error:
            return Response({"errors": str(error)})

class UserViewSet(APIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, format=None):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
      
class ClientViewSet(APIView):
    queryset = Client.objects.all()
    serializer_class =ClientProfileSerializer

    def get(self, request, format=None):
        clients =Client.objects.all()
        serializer =ClientProfileSerializer(clients, many=True)
        return Response(serializer.data)
       
    def post(self, request, format=None):
        serializer =ClientProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class CharityViewSet(APIView):
    queryset = Charity.objects.all()
    serializer_class = CharityProfileSerializer
    
    def get(self, request, format=None):
        charities = Charity.objects.all()
        serializer = CharityProfileSerializer(charities, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CharityProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class UserSessions(APIView): 
    queryset = User.objects.all()
    serializer_class = UserSessionSerializer

    def get(self, request, format=None):
        if request.user.is_authenticated:
            return Response(UserSessionSerializer(request.user).data)
        return Response(UserSessionSerializer(User()).data)

    def post(self, request, format=None): #login
        try:
            user_from_db = User.objects.get(email=request.data.get('email', ''))
            user = authenticate(email=user_from_db.email, password=request.data.get('password', '')) 
            if user == None:
                return Response({"errors": "Invalid login attempt, wrong combination", "user": None})
            login(request, user)


            return Response(UserSessionSerializer(user).data)
        except User.DoesNotExist as error: #handle does not exist error(server break)
            return Response({"errors": "Invalid login attempt, does not exist", "user": None})

    def delete(self, request, format=None): #logout
        logout(request)
        return Response({"msg": "logged out"})

class ClientDetails(APIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, client_id, format=None):
        try:
            client=Client.objects.get(id=client_id)
            current = request.user.id
            if current != client.user_id:
                 return Response({"errors": "You are not authorized to view this page!"})
            serializer = ClientProfileSerializer(client)
            return Response(serializer.data)
        except Exception as error:
            return Response({"errors": str(error)})     

class CharityDetails(APIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, charity_id, format=None):
        try:
            charity=Charity.objects.get(user_id=charity_id)
            current = request.user.id
            if current != charity.user_id:
                return Response({"errors": "You are not authorized to view this page!"})
            serializer =CharityProfileSerializer(charity)
            return Response(serializer.data)
        except Exception as error:
            return Response({"errors": str(error)})        