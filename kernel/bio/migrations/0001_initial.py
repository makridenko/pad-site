# Generated by Django 3.1 on 2021-05-15 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Story',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(verbose_name='Период')),
                ('nowadays', models.BooleanField(default=0, verbose_name='По настоящее время')),
                ('photo', models.ImageField(blank=True, null=True, upload_to='story_cover', verbose_name='Фотография периода')),
                ('text', models.TextField(verbose_name='Текст')),
            ],
            options={
                'verbose_name': 'История',
                'verbose_name_plural': 'Истории',
                'ordering': ('date',),
            },
        ),
    ]