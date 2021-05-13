# -*- coding: utf-8 -*-

from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from bio.models import Story


class StoryNode(DjangoObjectType):
    class Meta:
        model = Story
        filter_fields = []
        interfaces = (relay.Node,)


class Query(ObjectType):
    stories = DjangoFilterConnectionField(StoryNode)
