const readlineSync = require('readline-sync');

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');
    let answer = readlineSync.question('\nEnter number limit: ');

    let rules1 = readlineSync.question('Choose number 1 as Fizz: ');
    let rules2 = readlineSync.question('Choose number 2 as Fezz: ');
    let rules3 = readlineSync.question('Choose number 3 as Buzz: ');
    let rules4 = readlineSync.question('Choose number 4 as Bang: ');
    let rules5 = readlineSync.question('Choose number 5 a Bong: ');

    // Loop runs through each statement sequentially, checking what 'i' is divisible by.
    for (let i = 0; i < answer ; i++) {

        let numList = [];

        if (i < 1) {
            console.log('\n');
        }


        if (i % rules1 === 0) {
            numList.push("Fizz");
        }


        if (i % rules2 === 0) {
            numList.push("Fezz");
        }


        if (i % rules3 === 0) {
            numList.push("Buzz");
        }


        if (i % rules4 === 0) {
            numList.push("Bang");
        }


        if (i % rules5 === 0) { 
            numList.push("Bong");
        }


        // if ((i % 11 === 0) && (i % 13 === 0)) { 
        //     numList = [];
        //     numList.push("FezzBong");
        // }

        
        /*if (numList.length === 0) {
            numList.push(i);
        }*/


        if (i % 17 === 0) {
            numList.reverse().join('');
        }
        console.log(i + " " + numList.join(""));
    }
  
};

// Now we run the main function...
fizzbuzz();
