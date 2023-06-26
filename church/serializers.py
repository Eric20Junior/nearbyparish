from rest_framework import serializers
from .models import Church, FAQ, FormSubmission

class ChurchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Church
        fields = ('id', 'user', 'church_name', 'address', 'phone_number', 'description', 'parish', 'website', 'parish_priest', 'established_date')


class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__'


class FormSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormSubmission
        fields = '__all__'