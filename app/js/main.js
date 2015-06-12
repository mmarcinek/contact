// var addContact = function (e) {
//   e.preventDefault();

//   var firstName = $('#firstName').val();
//   var lastName = $('#lastName').val();
//   var address = $('#address').val();
//   var email = $('#email').val();
//   var phone = $('#phone').val();

// };

var newContact = function(x){
  x.preventDefault();

  var firstName = $(this).find('#firstName').val();
  var lastName = $(this).find('#lastName').val();
  var address = $(this).find('#address').val();
  var email = $(this).find('#email').val();
  var phone = $(this).find('#phone').val();

var entry = new Contact ({
  firstName = firstName,
  lastName  = lastName,
  address = address,
  email = email,
  phone = phone
})

  console.log();
};

};


// On Submit creates newContact from HTML form:
$('#makeNewContact').on('submit', newContact);
