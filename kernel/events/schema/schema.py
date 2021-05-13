# -*- coding: utf-8 -*-

from graphene import ObjectType

from .event import Query as EventQuery


class Query(
    EventQuery,
    ObjectType,
):
    pass
