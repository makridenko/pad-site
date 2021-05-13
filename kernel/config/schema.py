# -*- coding: utf-8 -*-

from graphene import ObjectType, Schema

from events.schema import Query as EventsQuery
from music.schema import Query as MusicQuery
from bio.schema import Query as StoryQuery


class Query(
    EventsQuery,
    MusicQuery,
    StoryQuery,
    ObjectType,
):
    pass


schema = Schema(query=Query)
