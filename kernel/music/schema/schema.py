# -*- coding: utf-8 -*-

from graphene import ObjectType

from .release import Query as ReleaseQuery
from .song import Query as SongQuery


class Query(
    ReleaseQuery,
    SongQuery,
    ObjectType,
):
    pass
