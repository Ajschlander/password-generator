// Create global variables
const allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_";
const noSpecialCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const noNumericalCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*_";
const noLowercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_";
const noUppercaseCharacters = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_";
const noSpecialNumericalCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const noSpecialLowercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// Add event listener to generate button
document.getElementById('generate').addEventListener("click", function() {
  //Get all the user input
  const length = document.getElementById('legnth-input').value;
  const special = document.getElementById('special-check').checked;
  const numerical = document.getElementById('numerical-check').checked;
  const lowercase = document.getElementById('lowercase-check').checked;
  const uppercase = document.getElementById('uppercase-check').checked;

  // Check to see if the user typed in a value in the range of 8-128
  if (length < 8 || length > 128) {
    alert("Please enter a length between 8 and 128.");
    location.reload();
  }

  // Check to see if the user selected at least one character type
  if (special == false && numerical == false && lowercase == false && uppercase == false) {
    alert("Please select at least one character type.");
    location.reload();
  }

  // generate password with all characters
  if (special == true && numerical == true && lowercase == true && uppercase == true) {
    function makePassword(length) {
       let password           = '';
       let charactersLength = allCharacters.length;
       for ( let i = 0; i < length; i++ ) {
          password += allCharacters.charAt(Math.floor(Math.random() * charactersLength));
       }
      return password;
    }

    console.log(makePassword(length));
  }

  // Generate password without special characters
  else if (special == false && numerical == true && lowercase == true && uppercase == true) {
    function makePassword(length) {
       let password           = '';
       let charactersLength = noSpecialCharacters.length;
       for ( let i = 0; i < length; i++ ) {
          password += noSpecialCharacters.charAt(Math.floor(Math.random() * charactersLength));
       }
      return password;
    }

    console.log(makePassword(length));
  }

  // Generate password without numerical characters
  else if (special == true && numerical == false && lowercase == true && uppercase == true) {
    function makePassword(length) {
       let password           = '';
       let charactersLength = noNumericalCharacters.length;
       for ( let i = 0; i < length; i++ ) {
          password += noNumericalCharacters.charAt(Math.floor(Math.random() * charactersLength));
       }
      return password;
    }

    console.log(makePassword(length));
  }

  // Generate password without lowercase characters
  else if (special == true && numerical == true && lowercase == false && uppercase == true) {
    function makePassword(length) {
       let password           = '';
       let charactersLength = noLowercaseCharacters.length;
       for ( let i = 0; i < length; i++ ) {
          password += noLowercaseCharacters.charAt(Math.floor(Math.random() * charactersLength));
       }
      return password;
    }

    console.log(makePassword(length));
  }

  // Generate password without uppercase characters
  else if (special == true && numerical == true && lowercase == true && uppercase == false) {
    function makePassword(length) {
       let password           = '';
       let charactersLength = noUppercaseCharacters.length;
       for ( let i = 0; i < length; i++ ) {
          password += noUppercaseCharacters.charAt(Math.floor(Math.random() * charactersLength));
       }
      return password;
    }

    console.log(makePassword(length));
  }

  // Generate password without special or numerical characters
  else if (special == false && numerical == false && lowercase == true && uppercase == true) {
    function makePassword(length) {
       let password           = '';
       let charactersLength = noSpecialNumericalCharacters.length;
       for ( let i = 0; i < length; i++ ) {
          password += noSpecialNumericalCharacters.charAt(Math.floor(Math.random() * charactersLength));
       }
      return password;
    }

    console.log(makePassword(length));
  }

  // Generate password without special or lowercase characters
  else if (special == false && numerical == true && lowercase == false && uppercase == true) {
    function makePassword(length) {
       let password           = '';
       let charactersLength = noSpecialLowercaseCharacters.length;
       for ( let i = 0; i < length; i++ ) {
          password += noSpecialLowercaseCharacters.charAt(Math.floor(Math.random() * charactersLength));
       }
      return password;
    }

    console.log(makePassword(length));
  }
});

// Add event listener to copy button
document.getElementById('copy').addEventListener("click", function(){
  // copy the password generated to the clipboard
});
