from django.shortcuts import HttpResponse, redirect ,render
from django.http import JsonResponse
from rest_framework import viewsets 
from .submodels.News import News
from rest_framework.decorators import api_view , action
from .submodels.User import User, UserAddress
from .submodels.Appointment import BookAppointment
from .submodels.Activity import Activity, Volunteering 
from .submodels.Charity import Charity, CharityLocation,Category
from .serializers import UserSerializer,CategorySerializer,CharitySerializer,CharityLocationSerializer,NewsSerializer,UserAddressSerializer,BookAppointmentSerializer,ActivitySerializer,VolunteeringSerializer
 
   
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all() 
    serializer_class = UserSerializer

class UserAddressViewSet(viewsets.ModelViewSet):
    queryset = UserAddress.objects.all() 
    serializer_class = UserAddressSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all() 
    serializer_class = CategorySerializer

class CharityViewSet(viewsets.ModelViewSet):
    queryset = Charity.objects.all() 
    serializer_class = CharitySerializer

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

