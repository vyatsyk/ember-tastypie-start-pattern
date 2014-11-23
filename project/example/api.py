from tastypie.resources import ModelResource
from example.models import Example


class ExampleResource(ModelResource):
    class Meta:
        queryset = Example.objects.all()