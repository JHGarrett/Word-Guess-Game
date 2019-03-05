var words = ["thedarkknight", "gladiator", "findingnemo", "walle", "borat", "killbill", "inglouriousbasterds"]  //array for shows to guess
var wordGuess = "";   //to get random show
var wordLetters = []  //to split show and make an array of letters
var underline = 0;    //to get the show blanks
var wordBlank = [];   //to make the show blanks an array
var wrong = [];       //to get array of wrong letters 
var wins = 0;         //to hold amount of wins
var losses = 0;       //to hold amount of losses
var guessesLeft = 7;  //number of guesses

function movie() {   //function to get the random word and split  
    wordGuess = words[Math.floor(Math.random() * words.length)];   
    wordLetters = wordGuess.split("");    
    underline = wordLetters.length;   
    for (var i = 0; i < underline; i++) {
        wordBlank.push("_");
    }
    // end for statement

    document.getElementById("currentword").innerHTML = "  " + wordBlank.join("  ");    
}  //end function movie