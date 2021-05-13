# -*- coding: utf-8 -*-

from graphene import ObjectType, Schema

from events.schema import Query as EventsQuery
from music.schema import Query as MusicQuery


class Query(
    EventsQuery,
    MusicQuery,
    ObjectType,
):
    pass


schema = Schema(query=Query)
