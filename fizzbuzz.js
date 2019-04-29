

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    
    // Put your code here...
    for (let i = 0; i < 256 ; i++) {

        let numList = [];

        if (i % 3 === 0) {
            // x = x + "Fizz";
            numList.push("Fizz");

            // console.log("Fizz");
        }

        if (i % 13 === 0) {
            // x = x + "Fezz";
            numList.push("Fezz");
        }

        if (i % 5 === 0) {
            // x = x + "Buzz";
            // console.log("Buzz");
            numList.push("Buzz");
        }

        if (i % 7 === 0) {
            // x = x + "Bang";
            // console.log("Bang");
            numList.push("Bang");
        }

        if (i % 11 === 0) { 
            // x = '';
            // x = x + "Bong";
            numList.push("Bong");
        }

        if ((i % 11 === 0) && (i % 13 === 0)) { 
            numList = [];
            // x = x + "FezzBong";
            numList.push("FezzBong");
        }
        
        if (numList.length === 0) {
            // x = x + i;
            numList.push(i);
        }

        if (i % 17 === 0) {
            // x = x
            numList.reverse().join('');
        }
        console.log("" + numList.join(""));
    }
  
};

// Now we run the main function...
fizzbuzz();
