//Learned how to use destructuring to destructure an object in a function argument itself. Benefits can include less lines and neater code and not having to manipulate an entire object in a function

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return (({max, min}) => {
    // use function argument destructuring
    return (max + min) / 2.0;
  });
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
