/**
 * This following code needs some abstraction.
 * It's pretty hard to follow what is going on...
 * You're our only hope!
 *
 * STRATEGY
 * - If code is repeated, make that logic into a reusable function
 * - Create functions that modify a single entity/object at a time
 * - Wherever possible, try not to rely on global variables
 * - Run your code after every change to make sure it still works
 */


 conclusion(matches);




function Character(name, luck, isVillain) {
  this.name = name;
  this.luck = luck;
  this.isVillain = isVillain;
  this.isAlive = true;
}

// heroes
var katniss = new Character('Katniss', 10, false);
var peeta = new Character('Peeta', 6, false);
var haymitch = new Character('Haymitch', 10, false);
var johanna = new Character('Johanna', 8, false);

// Capitol scum
var oneScum = new Character('A', 5, true);
var twoScum = new Character('B', 5, true);
var threeScum = new Character('C', 6, true);
var fourScum = new Character('D', 7, true);

// array of obkects for heros
var heroes = [katniss, peeta, haymitch, johanna];

// console.log('Our heroes at the start', heroes);
//array of objext fore vilains
var capitol = [oneScum, twoScum, threeScum, fourScum];

// console.log('The villains at the start', capitol);

// var matches = [];

var heroWins = 0; // number of times a hero has won a match
var capitolWins = 0; // number of times a capitol villain has won a match
var matches =[];
// create 10 matches
// match a random hero with a random capitol villain
// var here and villian are re initialized each loop
//this function now set up and ruturns the mathes
function matchSet (hero, villian) {

for (var i = 0; i < 10; i++) {
  var match = [];
// min length 0 and max is 4 pulls index from random num
  hero = randomWholeNumber(0, heroes.length - 1);
  match.push(heroes[hero]);

 villain = randomWholeNumber(0, capitol.length - 1);
 match.push(capitol[villain]);

  matches.push(match);
}
return matches;
 }
// console.log("matchSet function", matchSet(heroes, capitol));

// console.log('Our scheduled matches', matches);

// determine the winner and loser for each match
//for each goes through an array of an array with 2 values 1 and 2. Should be pulling from matchSet Function()
//this function is goin to take in the invoked fucntion matchSet
function winOrLose (value){
matches.forEach(function (element) {

  if (element[0].isAlive && element[1].isAlive) { // if both contestants alive, run the match
    if (element[0].luck > element[1].luck) { // if hero luck greater than villain luck
      heroWins++; // add a win for the heroes

      element[0].luck++; // increase the hero's luck
      if (element[0].luck > 10) { // winner's luck cannot be above 10
        element[0].luck = 10;
      }

      element[1].luck--; // decrease the villain's luck
      if (element[1].luck < 0) { // if the luck falls below zero, character is dead
        element[1].isAlive = false;
      }
    } else if (element[0].luck < element[1].luck) { // if hero luck less than villain luck, villain wins
      capitolWins++; // add a win for the capitol/villains

      element[1].luck++; // increase the villain's luck
      if (element[1].luck > 10) { // winner's luck cannot be above 10
        element[1].luck = 10;
      }

      element[0].luck--; // decrease the hero's luck
      if (element[0].luck < 0) { // if the luck falls below zero, character is dead
        element[0].isAlive = false;
      }
    }
  } else if (!element[1].isAlive && element[0].isAlive) { // if the villain is not alive, but the hero is, automatic win for hero
    heroWins++; // add a win for the heroes

    element[0].luck++; // increase the hero's luck
    if (element[0].luck > 10) { // winner's luck cannot be above 10
      element[0].luck = 10;
    }

    element[1].luck--; // decrease the villain's luck
    if (element[1].luck < 0) { // if the luck falls below zero, character is dead
      element[1].isAlive = false;
    }
  } else if (!element[0].isAlive && element[1].isAlive) { // if the hero is not alive, but the villain is, automatic win for villain
    capitolWins++; // add a win for the capitol/villains

    element[1].luck++; // increase the villain's luck
    if (element[1].luck > 10) { // winner's luck cannot be above 10
      element[1].luck = 10;
    }

    element[0].luck--; // decrease the hero's luck
    if (element[0].luck < 0) { // if the luck falls below zero, character is dead
      element[0].isAlive = false;
    }
  }
});
return value ;
}
// console.log("win or lose", winOrLose(matchSet(heroes,capitol)));
// winOrLose(matchSet(heroes, capitol));

console.log("whats up",winOrLose(matchSet(heroes,capitol)))
// console.log("did this work",conclusion(matches));




// display the results of our matches in the console
function conclusion() {
  // console.log('Heroes at conclusion', heroes);
  // console.log('Villains at conclusion', capitol);

  if (capitolWins > heroWins) {
    alert('Not really the ending we were hoping for');
  } else {
    alert('we did it');
  }
}

function randomWholeNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
// console.log("did this work", conclusion(matches));
