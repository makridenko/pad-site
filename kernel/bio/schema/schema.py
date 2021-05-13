# -*- coding: utf-8 -*-

from graphene import ObjectType

from .story import Query as StoryQuery


class Query(
    StoryQuery,
    ObjectType,
):
    pass
