(function (){

  app.Views.MainView = Backbone.View.extend({

      el = '.container',

  });

  initialize: function (options) {
    var args = options || {};

    this.collection = args.collection;

    this.render();
  },

  render: function (e){
    console.log('Hello');

    allContacts.add(entry).save().success( function(data){
    addAllToView(data);
    });

  }



}());
