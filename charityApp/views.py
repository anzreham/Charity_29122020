from django.http import JsonResponse
from django.shortcuts import HttpResponse, redirect ,render
from rest_framework import viewsets 
from rest_framework.decorators import api_view , action
from .submodels.News import News
from .submodels.UserAddress import  UserAddress
from .submodels.Appointment import BookAppointment
from .submodels.Activity import Activity, Volunteering 
from .submodels.Charity import CharityLocation,Category
from .serializers import CategorySerializer,CharityLocationSerializer,NewsSerializer,UserAddressSerializer,BookAppointmentSerializer,ActivitySerializer,VolunteeringSerializer
 

class UserAddressViewSet(viewsets.ModelViewSet):
    queryset = UserAddress.objects.all() 
    serializer_class = UserAddressSerializer

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

