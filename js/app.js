'use strict';

let score = 0;

let userName = prompt('What is your name?');
  console.log(`Hello ${userName}, welcome to my site!`);
  alert(`Welcome to my site ${userName}, please answer these questions!`);

let qOne = prompt('Do I like to travel?').toLowerCase();

if(qOne === 'y' || qOne === 'yes'){
  alert('You are right! ' + userName);
  score++;
} else if(qOne === 'n' || qOne === 'no'){
  alert('You are wrong');
} else{
  alert('Answer yes or no');
}

let qTwo = prompt('Did I serve in the Military?');

if(qTwo === 'y' || qTwo === 'yes'){
  alert('You are right!');
  score++;
} else if(qTwo === 'n' || qTwo === 'no'){
  alert('You are wrong');
} else{
  alert('Answer yes or no');
}

let qThree = prompt('Am I big into model kits?');

if(qThree === 'y' || qThree === 'yes'){
  alert('You are right! I enjoy model kits preferably of robots and cars!');
  score++;
} else if(qThree === 'n' || qThree === 'no'){
  alert('You are wrong');
} else{
  alert('Answer yes or no');
}

let qFour= prompt('Do I like to run?');

if(qFour === 'y' || qFour === 'yes'){
  alert('You are very wrong!!!');
} else if(qFour === 'n' || qFour === 'no'){
  alert('You are very very right!!!');
  score++;
} else{
  alert('Answer yes or no');
}

let qFive = prompt('Have I ever lived in New Zealand?');

if(qFive === 'y' || qFive === 'yes'){
  alert('You are right!');
  score++;
} else if(qFive === 'n' || qFive === 'no'){
  alert('Wrong... I lived in New Zealand!');
} else{
  alert('Answer yes or no');
}


let clueGuesses = 5;
let answer = 6;
let rightanswer = false;

while(clueGuesses && !rightanswer){
  // let consoleGuess = getRandom();
  let userGuess = prompt('Guess what number I\'m thinking of between 1-10');

  clueGuesses--;
  if(parseInt(userGuess) === answer){
    rightanswer = true;
    alert('good job');
    score++;
  } else if(userGuess < answer) {
    alert(`You are too low, Guesses Remaining: ${clueGuesses}`)}
  else if(userGuess > answer) {
    alert(`You are too high, Guesses Remaining: ${clueGuesses}`)}
  if(clueGuesses === 0){
    alert(`it was ${answer}, Guesses Remaining: ${clueGuesses}`);
  }
}

let favEdmArt = ['illenium', 'slander', 'excision', 'rezz', 'porter robinson', '3lau'];

for(let i = 0; i < 6; i++){
  let guessMyFav = prompt('Guess my favorite edm artists!').toLowerCase();

  for(let j = 0; j < guessMyFav.length; j++){
    if(guessMyFav === favEdmArt[j]){
      alert('Good stuff!');
      score++;
      i = 6;
      break;
    }
  }
}
alert(`These are the possible quesses: ${favEdmArt}`);
alert(`You scored ${score}`);


let goodbye = prompt(`Thank you ${userName} for visiting my site! Hope you enjoyed your stay! see you again soon.`);