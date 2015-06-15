(function (){

  'use strict';

  app.Collections.ContactCollection = Backbone.Collection.extend({

  model: app.Models.Contact,

  url: 'http://tiy-515.herokuapp.com/collections/contact_mike'

});

}());
