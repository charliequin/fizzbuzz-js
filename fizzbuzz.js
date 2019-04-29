

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    
    // Put your code here...
    for (let i = 0; i < 166 ; i++) {

        let x = '';

        if (i % 3 === 0) {
            x = x + "Fizz";
            // console.log("Fizz");
        }

        if (i % 13 === 0) {
            x = x + "Fezz";
        }

        if (i % 5 === 0) {
            x = x + "Buzz";
            // console.log("Buzz");
        }

        if (i % 7 === 0) {
            x = x + "Bang";
            // console.log("Bang");
        }

        if (i % 11 === 0) { 
            x = '';
            x = x + "Bong";
        }

        if ((i % 11 === 0) && (i % 13 === 0)) { 
            x = '';
            x = x + "FezzBong";
        }
        
        if (x === '') {
            x = x + i;
        }
        console.log(x);
    }
  
};

// Now we run the main function...
fizzbuzz();
