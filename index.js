const prompt = require("prompt-sync")();

const target = Math.round(Math.random() * 10);

let guesses = 0;
console.log("target is :", target);

while(true){
    guesses++;

    const guess = Number (prompt("Guess the number (0-10): "))
    if(guess > target){
        console.log("your guess is too high.");
        continue;
    } else if(guess < target){
        console.log("your guess is too low.");
        continue;
    } else {
        console.log("Congrats you guessed perfectly");
        break;
    }
}

console.log("You guessed the number in just ",guesses, " tries!");
