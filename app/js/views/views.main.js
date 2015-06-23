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
    var self = this;

    this.collection.each( function (aContact){

      var renderedHtml = self.template(aContact.toJSON());

      self.$el.find('#students').append(renderedHtml);

    // allContacts.add(entry).save().success( function(data){
    // addAllToView(data);
    });
    })

  }



}());
