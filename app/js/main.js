// Creates allContacts as a new ContactCollection constructor to send
// object to server;

var allContacts = new ContactCollection();

var newContact = $('#makeNewContact').on('submit', function (e){

  e.preventDefault();
  // Gets values from input and sets as variable for constructor
  var firstName = $(this).find('#firstName').val();
  console.log(firstName);
  var lastName = $(this).find('#lastName').val();
  var address = $(this).find('#address').val();
  var email = $(this).find('#email').val();
  var phone = $(this).find('#phone').val();

  var entry = new Contact ({
    // first: firstName,
    // last: lastName,
    // address: address,
    // email: email,
    // phone: phone
  });


  // allContacts.add(entry).save().success( function(data){
  //   addAllToView(data);
  // });

  //resets form:
  this.reset();

});




// On Submit creates newContact from HTML form:
