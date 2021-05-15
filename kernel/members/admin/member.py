# -*- coding: utf-8 -*-

from django.contrib import admin

from members.models import Member


@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = (
        'first_name',
        'last_name',
        'is_contact_face',
        'mail',
    )
