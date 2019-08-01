//Learned how to use the strict equality (===) operator and how it differs from the equality operator in that it will not perform type conversion

// Setup
function testStrict(val) {
  if (val ===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
