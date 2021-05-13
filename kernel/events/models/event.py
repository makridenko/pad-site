# -*- coding: utf-8 -*-

from django.db import models


class Event(models.Model):
    """
    Model for event table in database.
    Event - where band will perform.
    """

    title = models.CharField(
        max_length=255, verbose_name='Название выступления',
    )
    date = models.DateField(verbose_name='Дата выступления')
    place_link = models.CharField(
        max_length=255, verbose_name='Название места'
    )
    event_link = models.URLField(verbose_name='Ссылка')

    class Meta:
        verbose_name = 'Выступление'
        verbose_name_plural = 'Выступления'
