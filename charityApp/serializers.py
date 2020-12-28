from rest_framework import serializers
from .submodels.News import News
from userApp.models import User, Charity
from .submodels.Appointment import BookAppointment
from .submodels.Activity import Activity, Volunteering
from .submodels.Charity import CharityLocation,Category
from .submodels.UserAddress import UserAddress
from userApp.serializers import UserSerializer

class UserAddressSerializer(serializers.ModelSerializer):
    creator = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = UserAddress
        fields = ('id', 'address_1', 'address_2','city','post','country','created_at','creator', 'updated_at')
    def create(self, validated_data):
        creator = validated_data['creator']
        creator.save()
        address_1=validated_data['address_1']
        address_2=validated_data['address_2']
        city=validated_data['city']
        post=validated_data['post']
        country=validated_data['country'] 
        address = UserAddress.objects.create(address_1=address_1,address_2=address_2,city=city,post=post,country=country,creator=creator) 
        return address

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

      