# -*- coding: utf-8 -*-

from django.contrib import admin
from django.urls import path, re_path
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings

from graphene_django.views import GraphQLView


urlpatterns = [
    path('api/', csrf_exempt(GraphQLView.as_view(graphiql=True))),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [
    re_path(
        r'',
        ensure_csrf_cookie(TemplateView.as_view(template_name='index.html')),
        name='index',
    ),
]
