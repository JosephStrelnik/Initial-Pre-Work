//Learned that scope refers to visability and that global refers to a scope that is visible everywhere within your JavaScript code. Also learned that variables created without var are atomatically global but this is not the preferred method.

// Declare your variable here
var myGlobal = 10;
oopsGlobal = 5;


function fun1() {
  // Assign 5 to oopsGlobal Here

}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
