# -*- coding: utf-8 -*-

from django.db import models

from utils.date_helpers import WEEK_TITLES, MONTH_TITLES


class Event(models.Model):
    """
    Model for event table in database.
    Event - where band will perform.
    """

    title = models.CharField(
        max_length=255, verbose_name='Название выступления',
    )
    date = models.DateField(verbose_name='Дата выступления')
    place = models.CharField(
        max_length=255, verbose_name='Название места'
    )
    event_link = models.URLField(verbose_name='Ссылка')

    class Meta:
        verbose_name = 'Выступление'
        verbose_name_plural = 'Выступления'
        ordering = ('-date',)

    @property
    def human_date(self):
        """ Returns human date in format 'day(int) month_title(str)' """
        return f'{self.date.day} {MONTH_TITLES[self.date.month]}'

    @property
    def day(self):
        """ Returns human str weekday """
        return WEEK_TITLES[self.date.isoweekday()]
