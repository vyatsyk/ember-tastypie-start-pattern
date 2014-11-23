from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.http import HttpResponse
from django.views.generic import TemplateView
from tastypie.api import Api
from example.api import ExampleResource

api_v1 = Api(api_name='v1')
api_v1.register(ExampleResource())

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'app.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', TemplateView.as_view(template_name="example.html")),
    url(r'^deployment/', lambda r: HttpResponse(open('/home/web/deployment'), content_type="text/plain")),
    url(r'api/', include(api_v1.urls))
)
