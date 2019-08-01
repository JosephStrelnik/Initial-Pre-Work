//Learned how to add a default statement to execute if no matching case statements are found in a switch statement

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 'a': answer = 'apple';
    break;
    case 'b': answer = 'bird';
    break;
    case 'c': answer = 'cat';
    break;
    default: answer = 'stuff';
  }
  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);
