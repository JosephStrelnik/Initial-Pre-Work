//Learned how to generate random whole numbers within a min/max number range

// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Changed line

}

randomRange();

// Change these values to test your function
var myRandom = randomRange(5, 15);
