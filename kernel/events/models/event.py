# -*- coding: utf-8 -*-

from django.db import models


WEEK_TITLES = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье',
}

MONTH_TITLES = {
    1: 'Январь',
    2: 'Февраль',
    3: 'Март',
    4: 'Апрель',
    5: 'Май',
    6: 'Июнь',
    7: 'Июль',
    8: 'Август',
    9: 'Сентябрь',
    10: 'Октябрь',
    11: 'Ноябрь',
    12: 'Декабрь',
}

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
