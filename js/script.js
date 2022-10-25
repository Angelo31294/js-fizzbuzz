"use strict"

// 1. Programma con una lista di numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    
    if(i % 3 === 0 && i % 5 === 0){                       // 1a. per i multipli di "3" stampa Fizz
    console.log("FizzBuzz");
    }else if(i % 3 === 0){                                // 1b. per i multipli di "5" stampa Buzz
    console.log("Fizz");
    }else if(i % 5 === 0 ){                               // 1c. per i multipli di "3" e "5" stampa FizzBuzz
    console.log("Buzz");
    }else {
    console.log(i);        
    }                   
}