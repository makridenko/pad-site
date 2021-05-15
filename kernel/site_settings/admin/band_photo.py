# -*- coding: utf-8 -*-

from django.contrib import admin

from site_settings.models import BandPhoto


@admin.register(BandPhoto)
class BandPhotoAdmin(admin.ModelAdmin):
    pass
