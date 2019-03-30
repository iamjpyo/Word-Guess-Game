// GLOBAL VARIABLES
//-----------------------------------------------------------------------------------
//Arrays and variables
var wordOptions = ["playboi carti", "lil uzi", "skepta", "sheck wes", "trick daddy", "the ying yang twins", "killa cam", "kanye west", "pharrell"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blankAndSuccesses = [];
var wrongLetters = [];

//Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;


// FUNCTIONS ( Reusable blocks that I will call upon when needed)
//-----------------------------------------------------------------------------------
function startGame () {

    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

        //Reset
        guessesLeft = 9;
        wrongLetters = [];
        blankAndSuccesses = [];

        //Populate blanks and successes with right number of blanks
        for ( var i=0; i<numBlanks; i++){
        blankAndSuccesses.push("_");

        }

        //Change HTML to reflect round conditions
        document.getElementById("wordToGuess").innerHTML = blankAndSuccesses.join("  ");
        document.getElementById("numGuesses").innerHTML = guessesLeft;
        document.getElementById("winCounter").innerHTML = winCount;
        document.getElementById("lossCounter").innerHTML = lossCount;
        
        
        //Testing

        console.log(selectedWord);
        console.log(lettersInWord);
        console.log(numBlanks);
        console.log(blankAndSuccesses);

}


//Check where in the word the letter exists
if(isLetterInWord) {
    for (var i=0; i<numBlanks; i++){
        if(selectedWord[i] == letter) {
            blankAndSuccesses[i] == letter;
        }
    }
}

//letter not found

else {
    wrongLetters.push(letter);
    numGuesses--
}

console.log(blankAndSuccesses)



// MAIN PROCESS
//-----------------------------------------------------------------------------------

//Initiates the code the first time
startGame();

//Registers keyclicks
document.onkeyup = function(event) {

    var letterGuessed = String.fromCharCode(event.keyCode).toLocaleLowerCase();


    //testing
    console.log(letterGuessed)

}