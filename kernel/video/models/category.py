# -*- coding: utf-8 -*-

from django.db import models


class Category(models.Model):
	"""
	Model for category table in database.
	Category - category for videos in frontend view on /videos page.
	"""

	title = models.CharField(max_length=255, verbose_name='Название категории')

	class Meta:
		verbose_name = 'Категория'
		verbose_name_plural = 'Категории'

	def __str__(self) -> str:
		return self.title
