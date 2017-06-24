var wordOptions = [ "moana", "cinderella", "pinocchio", "tarzan", "frozen", "mulan" ];
var selectedWord ="";
var lettersinWord =[];
var blanks = 0;
var blanksAndSuccesses =[];
var wrongLetters = [];
 
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

function startGame() {
  selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  lettersinWord = selectedWord.split("");
  blanks = lettersinWord.length;

  guessesLeft = 9;
  wrongLetters = [];
  blanksAndSuccesses = [];

  for (var i=0; i<blanks; i++){
    blanksAndSuccesses.push("_");
  }

  document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
 
  document.getElementById("numGuesses").innerHTML = guessesLeft;

  document.getElementById("winCounter").innerHTML = winCount;

  document.getElementById("lossCounter").innerHTML = lossCount;

    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(blanks);
    console.log(blanksAndSuccesses);
}
function checkLetters(letter){

    var isLettersInWord = false;

    for( var i=0; i<blanks; i++){
      if(selectedWord[i] == letter){
        isLettersInWord = true;
      }
    }

    if(isLettersInWord){

    for (var i=0; i<blanks; i++){
      if(selectedWord[i] == letter){
        blanksAndSuccesses[i] = letter;
      }
    }
  }

  else{
    wrongLetters.push(letter);
    guessesLeft --
  }

console.log(blanksAndSuccesses);

}
function roundComplete(){
  console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left " + guessesLeft);

document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
 
if(lettersinWord.toString() == blanksAndSuccesses.toString()){
  winCount++;
  alert("You Won!");

  document.getElementById("winCounter").innerHTML = winCount;
  startGame();
}

else if (guessesLeft == 0) {
  lossCount++;
  alert("You Lost!")

  document.getElementById("lossCounter").innerHTML = lossCount;
  startGame();

  startGame();
}

}

startGame();

document.onkeyup = function(event) {
  var lettesGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(lettesGuessed);
  roundComplete();  

  console.log(lettesGuessed);
}