from django.contrib import admin
from .models import Church, FAQ, FormSubmission

# Register your models here.
admin.site.register(Church)
admin.site.register(FAQ)
admin.site.register(FormSubmission)