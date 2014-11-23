var App = Ember.Application.create();

App.ApplicationAdapter = DS.DjangoTastypieAdapter.extend();
App.ApplicationSerializer = DS.DjangoTastypieSerializer.extend();