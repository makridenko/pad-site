# -*- coding: utf-8 -*-

from django.contrib import admin

from music.models import Song


@admin.register(Song)
class SongAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'release',
    )
