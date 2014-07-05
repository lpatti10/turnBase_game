var gender = ['male', 'female'];
var level = ['rich', 'poor', 'just making it', 'dumpster diving'];
var other = ['likes pizza', 'plays baseball', 'swims with sharks'];

// Function to randomize a property from an array
var randoItem = function (array) {
  // Generates a random number from 0 to the length of the passed in array
  // Returns the value
  return array[Math.floor(Math.random()*array.length)];
}


$('button').on('click', function() {
  
  var rand_gender = randoItem(gender);
  var rand_level = randoItem(level);
  var rand_other = randoItem(other);
  
  alert('This person is a ' + rand_gender + ' and is ' + rand_level + ' but ' + rand_other);
  
});