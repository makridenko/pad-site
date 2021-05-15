# -*- coding: utf-8 -*-

import graphene
from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from bio.models import Story


class StoryNode(DjangoObjectType):
    only_year = graphene.String(source='only_year')

    class Meta:
        model = Story
        filter_fields = []
        interfaces = (relay.Node,)


class Query(ObjectType):
    stories = DjangoFilterConnectionField(StoryNode)
