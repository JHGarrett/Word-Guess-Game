var words = ["thedarkknight", "gladiator", "findingnemo", "walle", "borat", "killbill", "inglouriousbasterds"]  //array for movies to guess
var wordGuess = "";   //to get random movie
var wordLetters = []  //to split movie and make an array of letters
var underline = 0;    //to get the movie blanks
var wordBlank = [];   //to make the movie blanks an array
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

function reset() {   //function to reset game
    guessesLeft = 7;
    wrong = [];
    wordBlank = [];
    movie()         
    document.getElementById("image").src = "assets/images/MovieTheater.jpg";  
} //end function reset

function checkLetters(letter) {   //to check letters against random movie
    var letterInWord = false;    
    for (var i = 0; i < underline; i++) {
        if (wordGuess[i] == letter) {
            letterInWord = true;
        } //end if
    }  //end for


    if (letterInWord) {        
        for (var i = 0; i < underline; i++) {
            if (wordGuess[i] == letter) {
                wordBlank[i] = letter;
            } //end if
        } //end for
    } //end if
    
    else {
        wrong.push(letter);
        guessesLeft--;
    } //end else    
}  //end function checkLetters(letter)


function complete() {    //function to reset after win or loss
    if (wordLetters.toString() === wordBlank.toString()) {
        wins++;
        reset()    
        document.getElementById("image").src = "assets/images/goodjob.jpg";                      
    
        document.getElementById("winstracker").innerHTML = " " + wins;       
    } //end if

    else if (guessesLeft === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "assets/images/loser.jpg";                      
        document.getElementById("losstracker").innerHTML = " " + losses;
    } //end else if 
    document.getElementById("currentword").innerHTML = "  " + wordBlank.join(" ");
    document.getElementById("guessesLeft").innerHTML = " " + guessesLeft;    
}  //end function complete

movie()  //to call game to start
document.onkeyup = function (event) {
    document.getElementById("image").src = "assets/images/MovieTheater.jpg";  

    var guesses = String.fromCharCode(event.keyCode).toLowerCase();    
    checkLetters(guesses);   
    complete();     
    console.log(guesses);    
    document.getElementById("playerguesses").innerHTML = "  " + wrong.join(" ");
}  //end onkeyup

// need to fix issue where jollyroger doesn't go away