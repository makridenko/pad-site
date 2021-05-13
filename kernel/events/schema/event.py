# -*- coding: utf-8 -*-

from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from events.models import Event


class EventNode(DjangoObjectType):
    class Meta:
        model = Event
        filter_fields = []
        interfaces = (relay.Node,)


class Query(ObjectType):
    events = DjangoFilterConnectionField(EventNode)
