from rest_framework import serializers
from .models import User , Client, Charity
from django.contrib.auth import password_validation
from django.contrib.auth.hashers import make_password
 

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=('id','email','phone_number','password','created_at')
        extra_kwargs = {'password': {'write_only': True}}
 
class UserSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=('id', 'email','password')
        extra_kwargs = {'password': {'write_only': True}}    

class ClientProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer() 
    class Meta:
        model = Client
        fields=('id','user','first_name','last_name','gender','created_at')

    def create(self, validated_data):
        user_data = validated_data['user']
        get_user=User.objects.create(is_client =True ,**user_data)
        get_user.set_password(user_data['password'])
        get_user.save()
        first_name=validated_data['first_name']
        last_name=validated_data['last_name']
        gender=validated_data['gender']
        client = Client.objects.create(user=get_user ,first_name=first_name,last_name=last_name, gender=gender) 
        return client

class CharityProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Charity
        fields=( 'id','user','name','description','logo','license_file')
    
    def create(self, validated_data):
        user_data = validated_data['user'] 
        get_user=User.objects.create(is_charity =True ,**user_data)
        get_user.set_password(user_data['password'])
        get_user.save()
        name=validated_data['name']
        description=validated_data['description']
        logo=validated_data['logo']
        license_file=validated_data['license_file']
        charity = Charity.objects.create(user=get_user ,name=name, description=description,logo=logo,license_file=license_file) 
        return charity
 


 
        

 