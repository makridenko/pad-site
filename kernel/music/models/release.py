# -*- coding: utf-8 -*-

from django.db import models


class Release(models.Model):
    """
    Model for release table in database.
    Release - it can be album or single.
    Model song has fk to release. Single has one song, album many.
    """

    title = models.CharField(
        max_length=255, verbose_name='Название релиза',
    )
    cover = models.ImageField(upload_to='release_covers/', verbose_name='Обложка релиза')
    release_date = models.DateField(verbose_name='Дата релиза')
    label = models.CharField(
        max_length=255, blank=True, null=True, verbose_name='Название лейбла',
    )
    vk_link = models.URLField(verbose_name='Ссылка на vk.com')
    apple_music_link = models.URLField(verbose_name='Ссылка на Apple Music')
    spotify_link = models.URLField(verbose_name='Ссылка на Spotify')
    youtube_link = models.URLField(verbose_name='Ссылка на YouTube')
    deezer_link = models.URLField(verbose_name='Сслыка на Deezer')
    yandex_music_link = models.URLField(verbose_name='Ссылка на Яндекс Музыку')
    about_text = models.TextField(
        blank=True, null=True, verbose_name='Описательный текст',
    )
    is_single = models.BooleanField(default=0, verbose_name='Сингл')

    class Meta:
        verbose_name = 'Релиз'
        verbose_name_plural = 'Релизы'

    def __str__(self):
        if self.is_single:
            return f'{self.title} - Single'
        return self.title
