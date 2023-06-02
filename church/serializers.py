from rest_framework import serializers
from .models import Church

class ChurchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Church
        fields = ('church_name', 'address', 'phone_number', 'description', 'parish', 'website', 'parish_priest', 'established_date')