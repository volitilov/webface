from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.indexView, name='home'),
    url(r'post/(?P<index>[0-9]+)/$', views.post, name='post'),
    url(r'work/(?P<pk>[0-9]+)/$', views.work, name='work'),
    url(r'feedback$', views.contacts, name='feedback'),
]
