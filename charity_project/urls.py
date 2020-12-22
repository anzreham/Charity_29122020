"""charity_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
 
from django.urls import path,include
from rest_framework import routers
from charityApp import views

router = routers.DefaultRouter()
router.register(r'user', views.UserViewSet)
router.register(r'user/<int:id>', views.UserViewSet)
router.register(r'user_location', views.UserAddressViewSet)
router.register(r'charity', views.CharityViewSet)
router.register(r'charity/<int:id>', views.CharityViewSet)
router.register(r'charity_location', views.CharityLocationViewSet)
router.register(r'category', views.CategoryViewSet)
router.register(r'news', views.NewsViewSet)
router.register(r'activities', views.ActivityViewSet)
router.register(r'book_appointment', views.BookAppointmentViewSet)
router.register(r'volunteering', views.VolunteeringViewSet)

urlpatterns = [
    path(r'api/', include(router.urls)),
]