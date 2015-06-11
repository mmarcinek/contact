new Contact = Backbone.Model.extend({

    initialize: function() {
        //initialize for testing of scripts in console only, comment out later:
        this.logName();
        this.logAddress();
        this.logEmail();
        this.logPhone();

    };
    // Returns Mongodb '_id' object as JSON 'id':

    idAttribute: '_id',

    // default attributes of our Contact

    defaults: {
        name: '',
        address: '',
        email: '',
        phone:
    };

    logName: function() {
        console.log(this.get('name'));
    },

    logAddress: function() {
        console.log(this.get('address'));
    },

    logEmail: function() {
        console.log(this.get('email'));
    },

    logPhone: function() {
        console.log(this.get('phone'));
    }

});
