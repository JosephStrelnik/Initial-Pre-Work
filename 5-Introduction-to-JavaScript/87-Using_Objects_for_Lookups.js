//Learned how to use an object to look up values especially if the input data is limited to a certain range

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line

  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
 result = lookup[val];

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
