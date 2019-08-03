//Learned how to use the rest operator for function parameters to take a variable number of arguments stored in an array

const sum = (function() {
  "use strict";
  return function sum(...args ) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
