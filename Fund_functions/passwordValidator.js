function passwordValidator(password) {
  function checkPassLength(pass) {
    if (pass.length >= 6 && pass.length <= 10) {
      return true;
    } else {
      console.log("Password must be between 6 and 10 characters");
      return false;
    }
  }

  function ifLettersAndDigits(pass) {
    const pattern = /^[A-Za-z0-9]+$/;

    if (pattern.test(pass)) {
      return true;
    } else {
      console.log('"Password must consist only of letters and digits"');
      return false;
    }
  }

  function checkIfMin2Digits(pass) {
    const pattern = /[0-9]{2,}/;

    if (pattern.test(pass)) {
      return true;
    } else {
      console.log("Password must have at least 2 digits");
      return false;
    }
  }

  const isValidLength = checkPassLength(password);
  const isLettersAndDigits = ifLettersAndDigits(password);
  const isMin2Digits = checkIfMin2Digits(password);

  if (isValidLength && isLettersAndDigits && isMin2Digits) {
    console.log("Password is valid");
  }
}
passwordValidator("logIn");
