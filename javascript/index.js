// Create global variables
let password = '';

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
});

// Add event listener to copy button
document.getElementById('copy').addEventListener("click", function(){

});
