(function (){

    'use strict';

    app.Models.Contact = Backbone.Model.extend({

    initialize: function() {

    },

    // Returns Mongodb '_id' object as JSON 'id':

    idAttribute: '_id',

    // default attributes of our Contact

    defaults: {
        first: '',
        last: '',
        twitter: '',
        email: '',
        phone: ''
    },

});


}());
