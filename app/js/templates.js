this["template"] = this["template"] || {};
this["template"]["contacts"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"list\">\n<ul id=\"contacts\">\n  <li>"
    + alias3(((helper = (helper = helpers.first || (depth0 != null ? depth0.first : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"first","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.last || (depth0 != null ? depth0.last : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"last","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>"
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>"
    + alias3(((helper = (helper = helpers.twitter || (depth0 != null ? depth0.twitter : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"twitter","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>"
    + alias3(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phone","hash":{},"data":data}) : helper)))
    + "</li>\n</ul>\n</div><br>\n";
},"useData":true});
this["template"] = this["template"] || {};
this["template"]["example"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<h1>\n  "
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\n</h1>\n";
},"useData":true});