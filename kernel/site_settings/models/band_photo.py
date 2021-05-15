# -*- coding: utf-8 -*-

import os

from django.db import models
from django.core.exceptions import ValidationError
from django.conf import settings


def band_photo_path(instance, filename):
    __photo_path = os.path.join(settings.MEDIA_ROOT, 'settings/band_photo.png')
    if os.path.exists(__photo_path): os.remove(__photo_path)
    return os.path.join('settings', 'band_photo.png')


def band_photo_bio_path(instance, filename):
    __photo_path = os.path.join(settings.MEDIA_ROOT, 'settings/band_photo_bio.png')
    if os.path.exists(__photo_path): os.remove(__photo_path)
    return os.path.join('settings', 'band_photo_bio.png')


class BandPhoto(models.Model):
    """
    Model for keep band photo.
    Only one instance is allowed.
    """

    band_photo = models.ImageField(
        upload_to=band_photo_path,
        verbose_name='Обложка сайта',
    )

    band_photo_bio = models.ImageField(
        upload_to=band_photo_bio_path,
        verbose_name='Фотографиия группы в разделе "О группе"',
    )

    def clean(self):
        if BandPhoto.objects.exists() and not self.pk:
            raise ValidationError("Нельзя добавлять больше одной настройки!")

    def save(self, *args, **kwargs):
        if self.pk:
            this = BandPhoto.objects.get()

        return super(BandPhoto, self).save(*args, **kwargs)

    class Meta:
        verbose_name = 'Фотография группы'
        verbose_name_plural = 'Фотография группы'

    def __str__(self):
        return 'Настройка для фото группы'
