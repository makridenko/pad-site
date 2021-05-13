# Generated by Django 3.1 on 2021-05-13 14:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Release',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название релиза')),
                ('cover', models.ImageField(upload_to='cover/', verbose_name='Обложка релиза')),
                ('release_date', models.DateField(verbose_name='Дата релиза')),
                ('label', models.CharField(blank=True, max_length=255, null=True, verbose_name='Название лейбла')),
                ('vk_link', models.URLField(verbose_name='Ссылка на vk.com')),
                ('apple_music_link', models.URLField(verbose_name='Ссылка на Apple Music')),
                ('spotify_link', models.URLField(verbose_name='Ссылка на Spotify')),
                ('youtube_link', models.URLField(verbose_name='Ссылка на YouTube')),
                ('deezer_link', models.URLField(verbose_name='Сслыка на Deezer')),
                ('yandex_music_link', models.URLField(verbose_name='Ссылка на Яндекс Музыку')),
                ('about_text', models.TextField(blank=True, null=True, verbose_name='Описательный текст')),
                ('is_single', models.BooleanField(default=0, verbose_name='Сингл')),
            ],
            options={
                'verbose_name': 'Релиз',
                'verbose_name_plural': 'Релизы',
            },
        ),
    ]
