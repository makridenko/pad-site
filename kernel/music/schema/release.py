# -*- coding: utf-8 -*-

from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from music.models import Release


class ReleaseNode(DjangoObjectType):
    class Meta:
        model = Release
        filter_fields = []
        interfaces = (relay.Node,)


class Query(ObjectType):
    release = relay.Node.Field(ReleaseNode)
    releases = DjangoFilterConnectionField(ReleaseNode)
