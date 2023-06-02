from django.db import models

# Create your models here.
class Church(models.Model):
    church_name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=20)
    description = models.TextField(null=True, blank=True)
    parish = models.CharField(max_length=100)
    website = models.URLField(max_length=200, null=True, blank=True)
    parish_priest = models.CharField(max_length=100, null=True, blank=True)
    established_date = models.DateField(null=True, blank=True)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)

    def __str__(self):
        return self.church_name