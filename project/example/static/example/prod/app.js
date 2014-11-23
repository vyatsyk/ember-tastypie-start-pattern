var App = Ember.Application.create();

App.ApplicationAdapter = DS.DjangoTastypieAdapter.extend();
App.ApplicationSerializer = DS.DjangoTastypieSerializer.extend();
Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "header", options) : helperMissing.call(depth0, "render", "header", options))));
  data.buffer.push("\n<h3>I'm Application</h3>\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>I'm header</h1>");
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <tr>\n            <td>");
  stack1 = helpers._triageMustache.call(depth0, "example", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n        </tr>\n    ");
  return buffer;
  }

  data.buffer.push("<h3>I'm index. Here are my examples</h3>\n<table class=\"table\">\n    <caption>Example table</caption>\n    <thead>\n    <tr>\n        <th>Example</th>\n    </tr>\n    </thead>\n    <tbody>\n    ");
  stack1 = helpers.each.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </tbody>\n</table>");
  return buffer;
  
});
App.ExamplesRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('example');
    }
});
App.IndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('example');
    }
});
App.Example = DS.Model.extend({
    example: DS.attr("string")
});
App.Router.map(function() {
    //this.resource('examples', {path: "/"}, function() {

//    });
});