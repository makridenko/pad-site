# -*- coding: utf-8 -*-

from graphene import ObjectType, Schema

from events.schema import Query as EventsQuery
from music.schema import Query as MusicQuery
from bio.schema import Query as StoryQuery
from members.schema import Query as MembersQuery


class Query(
    EventsQuery,
    MusicQuery,
    StoryQuery,
    MembersQuery,
    ObjectType,
):
    pass


schema = Schema(query=Query)
