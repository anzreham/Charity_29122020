from rest_framework import serializers
from .submodels.News import News
from userApp.models import User, Charity
from .submodels.Appointment import BookAppointment
from .submodels.Activity import Activity, Volunteering
from .submodels.Charity import CharityLocation,Category
from .submodels.UserAddress import UserAddress


class UserAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAddress
        fields = ['id', 'address_1', 'address_2','city','post','country','user_id','created_at', 'updated_at']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']
   
class CharitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Charity
        fields = ['id', 'name','description','email','phone_number','license_file','password','created_at','updated_at','belong_category']

class CharityLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CharityLocation
        fields = ['id', 'longitude','latitude','created_at','updated_at','charity']

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ['id', 'title','content','created_at','updated_at','charity_id']  

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ['id', 'name','description','date','created_at','updated_at','charity_id']  
          
class  BookAppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model =  BookAppointment
        fields = ['id', 'size','amount','date','time','user','charity','category','created_at','updated_at','charity_id']      

class VolunteeringSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteering
        fields = ['user', 'activity','created_at','updated_at']   

      