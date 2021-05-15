# -*- coding: utf-8 -*-

from django.db import models


class Story(models.Model):
    """
    Model for story table in database.
    Story - biography thing about band.
    """

    date = models.DateField(verbose_name='Период')
    nowadays = models.BooleanField(default=0, verbose_name='По настоящее время')
    photo = models.ImageField(
        upload_to='story_cover', blank=True, null=True,
        verbose_name='Фотография периода',
    )
    text = models.TextField(verbose_name='Текст')

    class Meta:
        verbose_name = 'История'
        verbose_name_plural = 'Истории'
        ordering = ('date',)

    def __str__(self):
        return f'{self.date}'

    @property
    def only_year(self):
        if self.nowadays:
            return f'{self.date.year} - настоящее время'
        return self.date.year
