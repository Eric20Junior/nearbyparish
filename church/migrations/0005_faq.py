# Generated by Django 4.2.1 on 2023-06-16 10:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('church', '0004_church_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='FAQ',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=255)),
                ('answer', models.TextField()),
            ],
        ),
    ]