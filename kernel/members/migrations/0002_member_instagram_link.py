# Generated by Django 3.1 on 2021-05-13 17:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='member',
            name='instagram_link',
            field=models.URLField(blank=True, null=True, verbose_name='Ссылка на инстаграм'),
        ),
    ]
