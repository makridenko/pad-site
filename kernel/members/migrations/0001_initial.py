# Generated by Django 3.1 on 2021-05-15 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255, verbose_name='Имя')),
                ('last_name', models.CharField(max_length=255, verbose_name='Фамилия')),
                ('is_contact_face', models.BooleanField(default=False, verbose_name='Контактное лицо')),
                ('vk_link', models.URLField(blank=True, null=True, verbose_name='Ссылка на vk.com')),
                ('telegram_link', models.URLField(blank=True, null=True, verbose_name='Ссылка на телеграмм')),
                ('instagram_link', models.URLField(blank=True, null=True, verbose_name='Ссылка на инстаграм')),
                ('position', models.CharField(max_length=255, verbose_name='Роль в группе')),
                ('mail', models.EmailField(blank=True, max_length=254, null=True, verbose_name='Email')),
            ],
            options={
                'verbose_name': 'Участник',
                'verbose_name_plural': 'Участники',
            },
        ),
    ]