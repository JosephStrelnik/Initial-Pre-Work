//Learned how to write a card counting function that uses a card parameter that is number or string and a count variable that is incremented or decremented count variable based on the cards value that returns a string and the current count plus a bet or hold value depending on the results

var count = 0;

function cc(card) {
  // Only change code below this line
 switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          count++;
          break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
          count--;
          break;
       }
      if (count > 0){
        return count + " Bet";
      } else {
        return count + " Hold";
       }
  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
