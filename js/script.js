// Bonus 1
const ul = document.querySelector("ul")

// 1. Programma con una lista di numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    if(i % 3 == 0){                                   // 1a. per i multipli di "3" stampa Fizz
    console.log("Fizz");
    let element = document.createElement(`li`);
    element.classList.add(`box-${i}`);
    element.innerHTML = console.log("i");
    ul.append(element);
    }
    if(i % 5 == 0){                                // 1b. per i multipli di "5" stampa Buzz
    console.log("Buzz");
    let element = document.createElement(`li`);
    element.classList.add(`box-${i}`);
    element.innerHTML = i;
    ul.append(element);
    }
    else(1 % 3 == 0 && 1 % 5 == 0 )                    // 1c. per i multipli di "3" e "5" stampa FizzBuzz
    console.log("FizzBuzz");
    console.log(i);
    let element = document.createElement(`li`);
    element.classList.add(`box-${i}`);
    element.innerHTML = i;
    ul.append(element);                                // Bonus 1
}