//Learned that changing a let keyword does not change globally but inside a block, statement or expression

function checkScope() {
    "use strict";
      let i = "function scope";
      if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
      }
    console.log("Function scope i is: ", i);
    return i;
  }
