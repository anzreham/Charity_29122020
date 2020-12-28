from rest_framework import serializers
from .submodels.News import News
from userApp.models import User, Charity
from .submodels.Appointment import BookAppointment
from .submodels.Activity import Activity, Volunteering
from .submodels.Charity import CharityLocation,Category
from .submodels.UserAddress import UserAddress
from userApp.serializers import UserSerializer

class UserAddressSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = UserAddress
        fields = ('id', 'address_1', 'address_2','city','post','country','created_at','user', 'updated_at')
    def create(self, validated_data):
        user = validated_data['user']
        user.save()
        address_1=validated_data['address_1']
        address_2=validated_data['address_2']
        city=validated_data['city']
        post=validated_data['post']
        country=validated_data['country'] 
        address = UserAddress.objects.create(address_1=address_1,address_2=address_2,city=city,post=post,country=country,user=user) 
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
    charity = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = CharityLocation
        fields = ('id', 'longitude','latitude','created_at','updated_at','charity')
    def create(self, validated_data):
        charity = validated_data['charity']
        charity.save()
        longitude=validated_data['longitude']
        latitude=validated_data['latitude']
        address = CharityLocation.objects.create(longitude=longitude,latitude=latitude,charity=charity) 
        return address


class NewsSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = News
        fields = ('id', 'title','content','created_at','updated_at','user') 
    def create(self, validated_data):
        user = validated_data['user']
        user.save()
        title=validated_data['title']
        content=validated_data['content']
        news = News.objects.create(title=title,content=content,user=user) 
        return news

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

      