# Generated by Django 4.2.1 on 2023-06-23 09:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('church', '0007_rename_is_respomded_formsubmission_is_responded'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='formsubmission',
            name='title',
        ),
    ]