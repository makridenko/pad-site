# -*- coding: utf-8 -*-

from django.contrib import admin

from video.models import Category, Video


class VideoInline(admin.TabularInline):
	model = Video


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
	list_display = (
		'title',
	)
	inlines = [
		VideoInline,
	]
