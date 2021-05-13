# -*- coding: utf-8 -*-

from django.db import models


class Member(models.Model):
    """
    Model for member tabel in database.
    Member - info about member of the band.
    """

    first_name = models.CharField(
        max_length=255, verbose_name='Имя',
    )
    last_name = models.CharField(
        max_length=255, verbose_name='Фамилия',
    )
    is_contact_face = models.BooleanField(
        default=False, verbose_name='Контактное лицо',
    )
    vk_link = models.URLField(
        blank=True, null=True, verbose_name='Ссылка на vk.com',
    )
    telegram_link = models.URLField(
        blank=True, null=True, verbose_name='Ссылка на телеграмм',
    )
    instagram_link = models.URLField(
        blank=True, null=True, verbose_name='Ссылка на инстаграм',
    )
    position = models.CharField(
        max_length=255, verbose_name='Роль в группе',
    )
    mail = models.EmailField(blank=True, null=True, verbose_name='Email')

    class Meta:
        verbose_name = 'Участник'
        verbose_name_plural = 'Участники'

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
