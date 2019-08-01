//Learned how to use the .hasOwnProperty method of objects to determine if an object has the given property name and returns a boolean response

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  }
  else {
      return "Not Found"
  }
}

// Test your code by modifying these values
checkObj("gift");
