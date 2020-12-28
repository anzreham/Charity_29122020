from django.db import models
from userApp.models import User

class UserAddress(models.Model):
    address_1  = models.CharField(max_length=40)
    address_2  = models.CharField(max_length=40, blank=True)
    city       = models.CharField(max_length=120)
    post       = models.CharField(max_length=40) 
    country    = models.CharField(max_length=40)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    creator    = models.OneToOneField("userApp.User", on_delete=models.CASCADE)

    def __repr__(self):
        return f'<User Address: ID:{self.id} City:{self.city} Creator ID:{self.creator_id}>'