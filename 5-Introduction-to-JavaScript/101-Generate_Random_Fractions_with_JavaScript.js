//Learned how to use the Math.random() function to generate random decimal numbers

function randomFraction() {

  // Only change code below this line.
var result = 0;
  // Math.random() can generate 0. We don't want to     return a 0,
  // so keep generating random numbers until we get one     that isn't 0
  while (result === 0) {
    result = Math.random();
  }

  return result;
  return 0;

  // Only change code above this line.
}
