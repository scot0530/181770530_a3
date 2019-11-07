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



function validateUsernameRegex() {
  var username = document.getElementById("username").value;

  var re = /^(?=.{8,24}$)(?![0-9])[a-zA-Z0-9]+$/;

  var test = re.test(String(username).toLowerCase());

  if (!test) {
    alert('Please enter a valid username.')
    document.getElementById("username").focus()

    return false;
  }

  return true;
}


function validatePasswordRegex() {
  var password = document.getElementById("password").value;

  var re = /^(?=.{8,24}$)(?![0-9])[a-zA-Z0-9]+$/;

  var test = re.test(String(password).toLowerCase());

  if (!test) {
    alert('Please enter a valid password.')
    document.getElementById("password").focus()

    return false;
  }

  return true;
}


function validateForm() {
  if (!validateEmail()) {
    return false;
  }

  if (!validateUsernameRegex()) {
    return false;
  }

  if (!validatePasswordRegex()) {
    return false;
  }

  return true;
}


function togglepass() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
