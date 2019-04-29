

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    for (let i = 0; i < 106 ; i++) {

        if ((i % 7 === 0) && (i % 5 === 0) && (i % 3 === 0)) {
            console.log("FizzBuzzBang");
        }

         else if ((i % 5 === 0) && (i % 3 === 0)) {
            console.log("FizzBuzz");
        }

        else if ((i % 7 === 0) && (i % 3 === 0)) {
            console.log("FizzBang");
        }

        else if ((i % 7 === 0) && (i % 5 === 0)) {
            console.log("BuzzBang");
        }

        else if (i % 3 === 0) {
            console.log("Fizz");
        }

        else if (i % 7 === 0) {
            console.log("Bang")
        }


        else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
  
};

// Now we run the main function...
fizzbuzz();
