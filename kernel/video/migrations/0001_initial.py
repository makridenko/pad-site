# Generated by Django 3.1.8 on 2021-10-08 14:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название категории')),
            ],
            options={
                'verbose_name': 'Категория',
                'verbose_name_plural': 'Категории',
            },
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название видео')),
                ('subtitle', models.CharField(max_length=255, verbose_name='Подзаголовок')),
                ('date', models.DateField(blank=True, null=True, verbose_name='Дата')),
                ('cover', models.ImageField(upload_to='video_covers/', verbose_name='Обложка видео')),
                ('youtube_link', models.URLField(verbose_name='Ссылка на YouTube')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='video.category', verbose_name='Категория')),
            ],
            options={
                'verbose_name': 'Видео',
                'verbose_name_plural': 'Видео',
            },
        ),
    ]