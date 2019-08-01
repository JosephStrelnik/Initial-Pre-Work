//Learned the difference between var and let in regards to overwriting variables and also the importance of using strict mode

let catName;
    let quote;
    function catTalk() {
      "use strict";

      catName = "Oliver";
      quote = catName + " says Meow!";

    }
    catTalk();
