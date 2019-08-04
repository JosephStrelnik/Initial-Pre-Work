//Learned how to use ES6 to remove the "function" keyword and colon when defining functions in objects

// change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {

    "use strict";

    this.gear = newGear;
  }
};

// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
