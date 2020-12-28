from django.http import JsonResponse
from django.shortcuts import HttpResponse, redirect ,render
from rest_framework import viewsets 
from rest_framework.views import APIView
from rest_framework.response import Response
from userApp.models import User
from .submodels.News import News
from .submodels.UserAddress import  UserAddress
from .submodels.Appointment import BookAppointment
from .submodels.Activity import Activity, Volunteering 
from .submodels.Charity import CharityLocation,Category
from userApp.serializers import UserSerializer
from .serializers import CategorySerializer,CharityLocationSerializer,NewsSerializer,UserAddressSerializer,BookAppointmentSerializer,ActivitySerializer,VolunteeringSerializer

class UserAddressViewSet(APIView):
    queryset = UserAddress.objects.all()
    serializer_class = UserAddressSerializer

    def get(self, request, client_id, format=None):
        try:
            client=UserAddress.objects.get(creator_id=client_id)
            current = request.user.id
            if current != client.creator_id:
                 return Response({"errors": "You are not authorized to view this page!"})
            serializer = UserAddressSerializer(client)
            return Response(serializer.data)
        except:
            return Response({"errors": "You are not authorized to view this page!"})

    def post(self, request, client_id,format=None):
        try:
            client=UserAddress.objects.get(creator_id=client_id)
            current = request.user.id
            if current == client.creator_id:
                return Response({"errors": "You already posted an address"})
            serializer = UserAddressSerializer(data=request.data,context={'request': request})
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
        except:
            return Response({"errors": "You already posted an address"})

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all() 
    serializer_class = CategorySerializer

class CharityLocationViewSet(viewsets.ModelViewSet):
    queryset = CharityLocation.objects.all() 
    serializer_class = CharityLocationSerializer

class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all() 
    serializer_class = NewsSerializer

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all() 
    serializer_class = ActivitySerializer

class BookAppointmentViewSet(viewsets.ModelViewSet):
    queryset = BookAppointment.objects.all() 
    serializer_class = BookAppointmentSerializer

class VolunteeringViewSet(viewsets.ModelViewSet):
    queryset = Volunteering.objects.all() 
    serializer_class = VolunteeringSerializer

