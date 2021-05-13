# Generated by Django 3.1 on 2021-05-13 14:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='release',
            name='cover',
            field=models.ImageField(upload_to='release_covers/', verbose_name='Обложка релиза'),
        ),
        migrations.AlterField(
            model_name='release',
            name='is_single',
            field=models.BooleanField(default=1, verbose_name='Сингл'),
        ),
    ]
