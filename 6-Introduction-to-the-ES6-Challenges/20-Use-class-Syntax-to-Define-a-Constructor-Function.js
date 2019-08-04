//Learned how to use the keyword class to create objects. This technique replaces the constructor function creation

function makeClass() {
  "use strict";
  /* Alter code below this line */

   class Vegetable {
     constructor(Vegetable){
       this.name = Vegetable;

     }
   }

  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
