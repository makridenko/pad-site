# -*- coding: utf-8 -*-

from django.db import models


class Video(models.Model):
	"""
	Model for video table in database.
	Video doesn't keep video file itself, it's only have youtube link and cover.
	"""

	title = models.CharField(max_length=255, verbose_name='Название видео')
	subtitle = models.CharField(max_length=255, verbose_name='Подзаголовок')
	date = models.DateField(blank=True, null=True, verbose_name='Дата')
	cover = models.ImageField(
		upload_to='video_covers/', verbose_name='Обложка видео',
	)
	youtube_link = models.URLField(verbose_name='Ссылка на YouTube')
	category = models.ForeignKey(
		'video.Category', on_delete=models.CASCADE, verbose_name='Категория',
	)

	class Meta:
		verbose_name = 'Видео'
		verbose_name_plural = 'Видео'

	def __str__(self) -> str:
		return f'{self.category}{self.title}'
