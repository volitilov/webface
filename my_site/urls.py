from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^works$', views.works, name='works'),
    url(r'^feedback$', views.contacts, name='feedback'),
    url(r'^(?P<pk>\d+)$', views.addlike, name='addlike')
]
