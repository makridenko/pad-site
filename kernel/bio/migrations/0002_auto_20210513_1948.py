# Generated by Django 3.1 on 2021-05-13 16:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bio', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='story',
            old_name='year',
            new_name='date',
        ),
    ]
