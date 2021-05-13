# -*- coding: utf-8 -*-

from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from music.models import Song


class SongNode(DjangoObjectType):
    class Meta:
        model = Song
        filter_fields = []
        interfaces = (relay.Node,)


class Query(ObjectType):
    song = relay.Node.Field(SongNode)
    songs = DjangoFilterConnectionField(SongNode)
