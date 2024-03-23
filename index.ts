#! /usr/bin/env node

import inquirer from "inquirer";

// COMPUTER WILL GENERATE RANDOM NUMBER BETWEEN 1 AND 10

// USER WILL GUESS THE NUMBER

// COMPARE USER INPUT WITH COMPUTER INPUT NUMBER AND SHOW RESULTS.

const randomNumber = Math.floor (Math.random() *10 + 1);


const answers = await inquirer.prompt([
    {
        type: "number",
        name: "guessNumber",
        message: "please Entre Guess number between 1 and 10,$$$$",
    }
]);

if(answers.guessNumber === randomNumber){

    console.log("Congrats! You Won! $$$");
} else{
    console.log("You Lost! try again later");
}


