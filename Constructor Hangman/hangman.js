var inquirer = require('inquirer');
var isLetter = require('is-letter');
var prompt = require('prompt');

var wordBank = ['Alice in Wonderland','Charlie and The Chocolate','Edward Scissorhands','Sweeney Todd','Dark Shadows','Sleepy Hollow','The lone Ranger','Ed Wood','Finding Neverland','Trancedence','Blow','Donnie Brasco',
'Pirates of the Caribbean','Mortdecai','Public Enemies','Murder on the Orient Express','Black Mass','Rango','The Tourist'];
console.log("Welcome to Johnny Depp Movie's Hangman!");
console.log("Goodluck!");
console.log("-----------------------------");

prompt.start();

var game = function () {
    this.wordToguess = wordBank[Math.floor((Math.random()* (wordBank.length))+1)];
    this.wordWon = 0;
    this.guessRemaining = 10;
    this.startGame = () => {
      
        this.guessRemaining = 10;
        var newWordResult =[];
        var wordToGuess = wordBank[Math.floor((Math.random()* (wordBank.length))+1)];
            for (var i=0; i<wordToGuess.length; i++)
            {
                 newWordResult.push("_");
             }
             console.log(this.wordToguess);
             console.log(newWordResult);
        }
       
        var questions = [
            {
                message: "Guess a letter?",
                type: "input",
                name: "letter",
            }];
          
    }
    this.checkLetter = (letter) => {

    }

    

    var newGame = new game();
    newGame.startGame();
