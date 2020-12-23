from django.db import models

class Category(models.Model):
    name        = models.CharField(max_length=40)
    created_at  = models.DateTimeField(auto_now_add=True) 
    updated_at  = models.DateTimeField(auto_now=True)
    #charities_in_group FROM Charity, categories_appointment FROM BookAppointment
    
    def __repr__(self):
        return f'<Category object: ID:{self.id} name:{self.name}>'

class Charity(models.Model):
    name            = models.CharField(max_length=40)
    description     = models.CharField(max_length=40, blank=True)
    email           = models.EmailField()
    phone_number    = models.CharField(max_length=15)
    license_file    = models.TextField()
    password        = models.CharField(max_length=120)
    created_at      = models.DateTimeField(auto_now_add=True)
    updated_at      = models.DateTimeField(auto_now=True)
    belong_category = models.ForeignKey(Category, related_name='charities_in_group', on_delete=models.CASCADE) 
    #charitiy_location From CharityLocation, charitiy_news FROM News, charitiy_activities FROM Activity, charities_appointment FROM BookAppoinment 
    
    def __repr__(self):
        return f'<Charity object: ID:{self.id} Name:{self.name} :{self.description} Email:{self.email} Phone:{self.phone_number} License:{self.license_file}>'

class CharityLocation(models.Model):
    longitude   = models.CharField(max_length=120)
    latitude    = models.CharField(max_length=120)
    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)
    charity = models.OneToOneField("Charity", on_delete=models.CASCADE)

    def __repr__(self):
        return f'<Charity Location: ID:{self.id} Longitude:{self.longitude} Latitude:{self.latitud} Charity ID:{self.charity_id}>'