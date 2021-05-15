# -*- coding: utf-8 -*-

from django.contrib import admin

from bio.models import Story


@admin.register(Story)
class StoryAdmin(admin.ModelAdmin):
    list_display = (
        'date',
        'nowadays',
    )
