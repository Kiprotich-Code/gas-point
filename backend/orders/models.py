from django.db import models

# Create your models here.
class Orders(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone_no = models.IntegerField()
    location = models.CharField(max_length=100)
    service = models.CharField(max_length=100)
    weighs = models.PositiveIntegerField()
    gas_type = models.CharField(max_length=50)
    amount = models.FloatField()

    def __str__(self):
        return self.name
    

    