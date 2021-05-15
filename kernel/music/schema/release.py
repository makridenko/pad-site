# -*- coding: utf-8 -*-

import graphene
from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

import django_filters
from django_filters import FilterSet

from music.models import Release


class ReleaseFilter(FilterSet):
    class Meta:
        model = Release
        fields = ['is_single']


class ReleaseNode(DjangoObjectType):
    human_date = graphene.String(source='human_date')

    class Meta:
        model = Release
        filterset_class = ReleaseFilter
        interfaces = (relay.Node,)


class Query(ObjectType):
    release = relay.Node.Field(ReleaseNode)
    releases = DjangoFilterConnectionField(ReleaseNode)

    last_release = graphene.Field(ReleaseNode)

    @staticmethod
    def resolve_last_release(root, info, **kwargs):
        return Release.objects.first()
