function validateEmail() {
  var email = document.getElementById("email").value;

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var test = re.test(String(email).toLowerCase());

  if (!test) {
    alert('Please enter a valid email address.')
    document.getElementById("email").focus()

    return false;
  }

  return true;
}

function validateCountry() {
var country = document.getElementById("country").value;

  if (country == '') {
    alert('Please enter a valid country.')
    document.getElementById("country").focus();

    return false;
  }

  return true;
}

function validateDescription() {
  var description = document.getElementById("description").value;

  if (description == '') {
    alert("Please enter a valid description.");

    document.getElementById("country").focus();
    return false;
  }

  return true;
}

function validateImage() {
  var avatarImage = document.getElementById("avatarImage").value;

  if (avatarImage == '') {
    alert("Please upload a valid image.");

    document.getElementById("avatarImage").focus();

    return false;
  }

  return true;
}




function validateForm() {
  if (!validateEmail()) {
    return false;
  }

  if (!validateCountry()) {
    return false;
  }

  if (!validateDescription()) {
    return false;
  }

  if (!validateImage()) {
    return false;
  }


  return true;
}
