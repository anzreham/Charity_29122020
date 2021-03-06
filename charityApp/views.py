from django.http import JsonResponse
from django.shortcuts import HttpResponse, redirect ,render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from userApp.models import User,Category
from .submodels.News import News
from .submodels.UserAddress import  UserAddress
from .submodels.Appointment import BookAppointment
from .submodels.Activity import Activity, Volunteering
from .submodels.Charity import CharityLocation
from userApp.serializers import UserSerializer, CategorySerializer
from .serializers import CharityLocationSerializer,NewsSerializer,UserAddressSerializer,BookAppointmentSerializer,ActivitySerializer,VolunteeringSerializer

class UserAddressViewSet(APIView):
    queryset = UserAddress.objects.all()
    serializer_class = UserAddressSerializer

    def get(self, request, client_id, format=None):
        try:
            client=UserAddress.objects.get(user_id=client_id)
            current = request.user.id
            if current != client.user_id:
                 return Response({"errors": "You are not authorized to view this page!"})
            serializer = UserAddressSerializer(client)
            return Response(serializer.data)
        except Exception as error:
            return Response({"errors": str(error)})


    def post(self, request, client_id,format=None):
        try:
            serializer = UserAddressSerializer(data=request.data,context={'request': request})
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors)
        except Exception as error:
            return Response({"errors": str(error)})

class NewsViewSet(APIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

    def get(self, request, format=None):
        news = News.objects.all()
        serializer = NewsSerializer(news, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        try:
            check=User.objects.get(id=request.user.id)
            if check.is_charity:
                serializer = NewsSerializer(data=request.data,context={'request': request})
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors)
            return Response({"errors": "Not allowed"})
        except Exception as error:
            return Response({"errors": str(error)})
 
class NewsDetails(APIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

    def get(self, request, news_id, format=None):
        try:
            news=News.objects.get(id=news_id)
            serializer = NewsSerializer(news)
            return Response(serializer.data)
        except Exception as error:
            return Response({"errors": str(error)})     
    
class CharityLocationViewSet(APIView):
    queryset = CharityLocation.objects.all()
    serializer_class = CharityLocationSerializer

    def get(self, request, charity_id, format=None):
        try:
            charity=CharityLocation.objects.get(user_id=charity_id)
            current = request.user.id
            if current != charity.user_id:
                return Response({"errors": "You are not authorized to view this page!"})
            serializer = CharityLocationSerializer(charity)
            return Response(serializer.data)
        except Exception as error:
            return Response({"errors": str(error)})

    def post(self, request, charity_id,format=None):
        try:
            serializer = CharityLocationSerializer(data=request.data,context={'request': request})
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors)
        except Exception as error:
            return Response({"errors": str(error)})

class ActivityViewSet(APIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

    def get(self, request, format=None):
        activities = Activity.objects.all()
        serializer = ActivitySerializer(activities, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        try:
            check=User.objects.get(id=request.user.id)
            if check.is_charity:
                serializer = ActivitySerializer(data=request.data,context={'request': request})
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors)
            return Response({"errors": "Not allowed"})
        except Exception as error:
            return Response({"errors": str(error)})

class ActivityDetails(APIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

    def get(self, request, activity_id, format=None):
        try:
            activiy=Activity.objects.get(id=activity_id)
            serializer = ActivitySerializer(activiy)
            return Response(serializer.data)
        except Exception as error:
            return Response({"errors": str(error)})     

class VolunteeringViewSet(APIView):
    queryset = Volunteering.objects.all()
    serializer_class = VolunteeringSerializer

    def get(self, request, format=None):
        volunteers = Volunteering.objects.all()
        serializer = VolunteeringSerializer(volunteers, many=True)
        return Response(serializer.data)

    def post(self, request,format=None):
        try:
            check=User.objects.get(id=request.user.id)
            if check.is_client:
                serializer = VolunteeringSerializer(data=request.data,context={'request': request})
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors)
            return Response({"errors": "Not allowed"})
        except Exception as error:
            return Response({"errors": str(error)})

class BookAppointmentViewSet(APIView):
    queryset = BookAppointment.objects.all()
    serializer_class = BookAppointmentSerializer

    def get(self, request, format=None):
        appts = BookAppointment.objects.all()
        serializer = BookAppointmentSerializer(appts, many=True)
        return Response(serializer.data)

class BookAppointmentDetailsViewSet(APIView):
    queryset = BookAppointment.objects.all()
    serializer_class = BookAppointmentSerializer

    def post(self, request, format=None):
        try:
            check=User.objects.get(id=request.user.id)
            if check.is_client:
                serializer = BookAppointmentSerializer(data=request.data,context={'request': request})
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors)
            return Response({"errors": "Not allowed"})
        except Exception as error:
            return Response({"errors": str(error)})  

    # def post(self, request, format=None):
    #     serializer = CharityProfileSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors)

    # def get(self, request,format=None):
    #     try:
    #         charity=CharityLocation.objects.get(user_id=charity_id)
    #         current = request.user.id
    #         if current != charity.user_id:
    #             return Response({"errors": "You are not authorized to view this page!"})
    #         serializer = CharityLocationSerializer(charity)
    #         return Response(serializer.data)
    #     except Exception as error:
    #         return Response({"errors": str(error)})

    # def post(self, request, charity_id,format=None):
    #     try:
    #         serializer = CharityLocationSerializer(data=request.data,context={'request': request})
    #         if serializer.is_valid():
    #             serializer.save()
    #             return Response(serializer.data)
    #         return Response(serializer.errors)
    #     except Exception as error:
    #         return Response({"errors": str(error)})
