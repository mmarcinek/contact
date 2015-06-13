var Contact = Backbone.Model.extend({

    initialize: function() {
        //initialize for testing of scripts in console only, comment out later:
        // this.logfirst();
        // this.loglast();
        // this.logAddress();
        // this.logEmail();
        // this.logPhone();

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

    // // Function for testing constr
    // logfirst: function() {
    //     console.log(this.get('first'));
    // },

    // loglast: function (){
    //     console.log(this.get('last'));
    // },

    // logAddress: function() {
    //     console.log(this.get('address'));
    // },

    // logEmail: function() {
    //     console.log(this.get('email'));
    // },

    // logPhone: function() {
    //     console.log(this.get('phone'));
    // }

});


