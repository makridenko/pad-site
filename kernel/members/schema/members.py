# -*- coding: utf-8 -*-

from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

import django_filters
from django_filters import FilterSet

from members.models import Member


class MemberFilter(FilterSet):
    class Meta:
        model = Member
        fields = ['is_contact_face']


class MemberNode(DjangoObjectType):
    class Meta:
        model = Member
        filterset_class = MemberFilter
        interfaces = (relay.Node,)


class Query(ObjectType):
    members = DjangoFilterConnectionField(MemberNode)
