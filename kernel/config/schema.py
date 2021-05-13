# -*- coding: utf-8 -*-

from graphene import ObjectType, Schema

from events.schema import Query as EventsQuery


class Query(
    EventsQuery,
    ObjectType,
):
    pass


schema = Schema(query=Query)
