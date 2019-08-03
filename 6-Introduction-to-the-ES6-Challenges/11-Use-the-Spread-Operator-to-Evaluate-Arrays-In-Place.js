//Learned how to use the spread operator to expan arrays in places where multiple parameters or elements are expected. We use a spread operator in the example to copy contents from one array to another

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
