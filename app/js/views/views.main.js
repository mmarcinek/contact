(function (){

  app.Views.MainView = Backbone.View.extend({

      el: '.contacts',

      template: hbs.contacts,


  initialize: function (options) {

    var args = options || {};

    this.collection = args.collection;

    this.render();
  },

  render: function (){
    this.$el.html(this.template({ contacts: this.collection.toJSON() }))
    }

     });

}());
