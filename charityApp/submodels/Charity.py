from django.db import models
from userApp.models import Charity

class Category(models.Model):
    name        = models.CharField(max_length=40)
    created_at  = models.DateTimeField(auto_now_add=True) 
    updated_at  = models.DateTimeField(auto_now=True)
    #charities_in_group FROM Charity, categories_appointment FROM BookAppointment
    
    def __repr__(self):
        return f'<Category object: ID:{self.id} name:{self.name}>'


class CharityLocation(models.Model):
    longitude   = models.CharField(max_length=120)
    latitude    = models.CharField(max_length=120)
    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)
    # charity = models.OneToOneField("Charity", on_delete=models.CASCADE)

    def __repr__(self):
        return f'<Charity Location: ID:{self.id} Longitude:{self.longitude} Latitude:{self.latitud} Charity ID:{self.charity_id}>'