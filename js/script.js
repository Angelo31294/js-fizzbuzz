"use strict"
const tableContainer = document.getElementById("table");

// 1. Programma con una lista di numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    
    const item = document.createElement("div");
    item.classList.add("item");

    if(i % 3 === 0 && i % 5 === 0){                       // 1a. per i multipli di "3" stampa Fizz
        item.innerHTML = "FizzBuzz";
        item.classList.add("bg-coral");
    console.log("FizzBuzz");
    }else if(i % 3 === 0){                                // 1b. per i multipli di "5" stampa Buzz
        item.innerHTML = "Fizz";
        item.classList.add("bg-green");
    console.log("Fizz");
    }else if(i % 5 === 0 ){                               // 1c. per i multipli di "3" e "5" stampa FizzBuzz
        item.innerHTML = "Buzz";
        item.classList.add("bg-pink");
    console.log("Buzz");
    }else {
        item.innerHTML = i;
    console.log(i);        
    }   
    
    // inserisco l'item nel suo contenitore
    tableContainer.append(item);
}