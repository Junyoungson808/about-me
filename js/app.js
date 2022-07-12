'use strict';

console.log('hey world hey!')


let userName = prompt('What is your name?');
  console.log(`Hello ${userName}, welcome to my site!`);
  alert(`Welcome to my site ${userName}, please answer these questions!`);

let qOne = prompt('Do I like to travel?').toLowerCase();

if(qOne === 'y' || qOne === 'yes'){
  alert('You are right! ' + userName);
} else if(qOne === 'n' || qOne === 'no'){
  alert('You are wrong');
} else{
  alert('Answer yes or no');
}

let qTwo = prompt('Did I serve in the Military?');

if(qTwo === 'y' || qTwo === 'yes'){
  alert('You are right!');
} else if(qTwo === 'n' || qTwo === 'no'){
  alert('You are wrong');
} else{
  alert('Answer yes or no');
}

let qThree = prompt('Am I big into model kits?');

if(qThree === 'y' || qThree === 'yes'){
  alert('You are right! I enjoy model kits preferably of robots and cars!');
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
} else{
  alert('Answer yes or no');
}


let qFive = prompt('Have I ever lived in New Zealand?');

if(qFive === 'y' || qFive === 'yes'){
  alert('You are right!');
} else if(qFive === 'n' || qFive === 'no'){
  alert('You are wrong');
} else{
  alert('Answer yes or no');
}

let goodbye = prompt(`Thank you ${userName} for visiting my site! Hope you enjoyed your stay! see you again soon. `);