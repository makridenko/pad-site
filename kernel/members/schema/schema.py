# -*- coding: utf-8 -*-

from graphene import ObjectType

from .members import Query as MemebersQuery


class Query(
    MemebersQuery,
    ObjectType,
):
    pass
