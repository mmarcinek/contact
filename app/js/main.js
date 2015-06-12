// Creates allContacts as a new ContactCollection constructor to send
// object to server;

var allContacts = new ContactCollection();

allContacts.fetch().done( function (){
  allContacts.each( function ( contact) {
    addAllToView(contact.attributes);
  });
});

var newContact = $('#makeNewContact').on('submit', function (e){

  e.preventDefault();
  // Gets values from input and sets as variable for constructor
  var firstName = $(this).find('#firstName').val();
  var lastName = $(this).find('#lastName').val();
  var address = $(this).find('#address').val();
  var email = $(this).find('#email').val();
  var phone = $(this).find('#phone').val();

  var entry = new Contact ({
    first: firstName,
    last: lastName,
    address: address,
    email: email,
    phone: phone
  });


  allContacts.add(entry).save().success( function(data){
    addAllToView(data);
  });

// Gets data from fetch and appends to html via Handlebars template:
  var addAllToView = function (list) {
    var contactHtml = template.contacts(list);

    $('#contacts').prepend(contactHtml);
  };

  //resets form:
  this.reset();

});




