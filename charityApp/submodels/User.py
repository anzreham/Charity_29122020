from django.db import models
import re

class User(models.Model):
    first_name  = models.CharField(max_length=40)
    last_name   = models.CharField(max_length=40, blank=True)
    email       = models.EmailField()
    phone_number= models.CharField(max_length=15)
    gender      = models.CharField(max_length=10)
    password    = models.CharField(max_length=120)
    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)
    #user_address FROM  UserAddress, user_volunteer FROM volunteering, user_appointment FROM Appointments

    def __repr__(self):
        return f'<User object: ID:{self.id} First Name:{self.first_name} Last Name:{self.last_name} Email:{self.email}>'

class UserAddress(models.Model):
    address_1  = models.CharField(max_length=40)
    address_2  = models.CharField(max_length=40, blank=True)
    city       = models.CharField(max_length=120)
    post       = models.CharField(max_length=40) 
    country    = models.CharField(max_length=40)
    # I'm not sure should be one to one or foriegn 
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user_id    = models.ForeignKey(User, related_name="user_address", on_delete = models.CASCADE)
 


