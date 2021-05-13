# -*- coding: utf-8 -*-

from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from members.models import Member


class MemberNode(DjangoObjectType):
    class Meta:
        model = Member
        filter_fields = []
        interfaces = (relay.Node,)


class Query(ObjectType):
    members = DjangoFilterConnectionField(MemberNode)
