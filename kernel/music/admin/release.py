# -*- coding: utf-8 -*-

from django.contrib import admin

from music.models import Release, Song


class SongInline(admin.TabularInline):
    model = Song
    extra = 1


@admin.register(Release)
class ReleaseAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'release_date',
        'is_single',
    )
    inlines = [
        SongInline,
    ]
