# -*- coding: utf-8 -*-

from django.db import models


class Song(models.Model):
    """
    Model for song table in database.
    Song - meta information about song.
    Has requirement field 'release' - fk to release table.
    """

    title = models.CharField(
        max_length=255, verbose_name='Название песни',
    )
    lyrics = models.TextField(blank=True, null=True, verbose_name='Текст песни')
    release = models.ForeignKey(
        'Release', on_delete=models.CASCADE, verbose_name='Релиз',
    )
    index_number = models.IntegerField(
        default=0, verbose_name='Порядковый номер в релизе',
    )

    class Meta:
        verbose_name = 'Песня'
        verbose_name_plural = 'Песни'

    def __str__(self):
        return f'{self.index_number}. {self.title}'
