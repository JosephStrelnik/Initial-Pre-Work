//Learned how to use destructuring assignment to choose which elements are assigned to variables and how to use commas to reach the desired index

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [b, a] = [a, b];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
