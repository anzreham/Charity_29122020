from django.db import models
from userApp.models  import Charity

class News(models.Model):
    title      = models.CharField(max_length=120)
    content    = models.CharField(max_length=120)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    charity_id = models.ForeignKey(Charity, related_name='charitiy_news', on_delete=models.CASCADE) 
    
    def __repr__(self):
        return f'<News: ID:{self.id} Title:{self.title} content:{self.content} Charity ID:{self.charity_id}>'