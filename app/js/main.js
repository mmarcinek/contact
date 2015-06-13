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
  var email = $(this).find('#email').val();
  var twitter = $(this).find('#twitter').val();
  var phone = $(this).find('#phone').val();

  var entry = new Contact ({
    first: firstName,
    last: lastName,
    twitter: twitter,
    email: email,
    phone: phone
  });


  allContacts.add(entry).save().success( function(data){
    addAllToView(data);
  });

// Gets data from fetch and appends to html via Handlebars template:

  //resets form:
  this.reset();


});

  var addAllToView = function (list) {
    var contactHtml = template.contacts(list);

    $('#contacts').prepend(contactHtml);
  };


  var removeContact = function(e){
  e.preventDefault();
  console.log('hello');
  var contactDelete = $(this).parent();
  var listDelete = contactDelete.attr('id');


  $.ajax ({
  url: url + '/' + listDelete,
  type: 'DELETE'
  }).done( function (){
    contactDelete.remove();
  });
};


var url = 'http://tiy-515.herokuapp.com/collections/contact_mike';
$('div').on('click', 'p', removeContact);




