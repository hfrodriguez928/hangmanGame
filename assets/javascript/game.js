var wordOptions = [ "moana", "cinderella", "pinocchio", "tarzan", "frozen", "mulan" ];
var selectedWord ="";
var lettersinWord =[];
var numBlanks = 0;
var blanksAndSuccesses =[]; // p _ _ _ _ _ _ _
var wrongLetters = [];

//GAME COUNTERS 
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//functions(reusable blocks of code that I will call upond needed) //

function startGame() {
  selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  lettersinWord = selectedWord.split("");
  numBlanks = lettersinWord.length;

  //reset
  guessesLeft = 9;
  wrongLetters = [];
  blanksAndSuccesses = [];

  // populate number of succeses with the right number of blank 

  for (var i=0; i<numBlanks; i++){
    blanksAndSuccesses.push("_");
  }

  // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
  document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
  // This will print the array of guesses and blanks onto the page.
  document.getElementById("numGuesses").innerHTML = guessesLeft;

  document.getElementById("winCounter").innerHTML = winCount;

  document.getElementById("lossCounter").innerHTML = lossCount;
  
  
    //testing/ debugging

    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);

}
function checkLetters(letter){
    // check if letter exist in code at all 

    var isLettersInWord = false;
    

    for( var i=0; i<numBlanks; i++){
      if(selectedWord[i] == letter){
        isLettersInWord = true;
      }
    }
    //check where in the word the letter exist, then populate out blankand succeses array//
    if(isLettersInWord){

    for (var i=0; i<numBlanks; i++){
      if(selectedWord[i] == letter){
        blanksAndSuccesses[i] = letter;
      }
    }
  }
  //letter wasnt found
  else{
    wrongLetters.push(letter);
    guessesLeft --
  }
  //testing 
console.log(blanksAndSuccesses);

}
function roundComplete(){
  console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left " + guessesLeft);
//udate htlm to most recent count stats
document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

//check if user has guessed the word and won  
if(lettersinWord.toString() == blanksAndSuccesses.toString()){
  winCount++;
  alert("You Won!");

  //UPDATE THE WIN COUNTER IN HTML
  document.getElementById("winCounter").innerHTML = winCount;
  startGame();
}

//CHECK IF USER HAS LOST 

else if (guessesLeft == 0) {
  lossCount++;
  alert("You Lost!")
  //UPDATE HTML WITH LOSSES
  document.getElementById("lossCounter").innerHTML = lossCount;
  startGame();

  startGame();
}


}
//MAIN PROCESS//
// Initiated the code with initial clicks 

startGame();
//Register CLICKS //

document.onkeyup = function(event) {
  var lettesGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(lettesGuessed);
  roundComplete();  

  // TESTING DEBUGGING 
  console.log(lettesGuessed);
}