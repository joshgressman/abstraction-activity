// Practice abstraction.
// https://en.wikipedia.org/wiki/Abstraction_principle_(computer_programming)

/**
 * 1. Create a Person constructor with the following object properties:
 * firstName
 * lastName
 * district
 * weapon
 * luck
 * matches
 * wins
 */
 function People (firstName, lastName, district, weapon, luck, matches, wins) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.district = district;
   this.weapon = weapon;
   this.luck = luck;
   this.matches = matches;
   this.wins = wins;
   }


/**
 * 2. Create person objects for Katniss, Rue, Peeta, and Gale with the
 * following values:
 * Katniss, Everdeen, 12, bow and arrow, 10, 0, 0
 * Peeta, Mellark, 12, camoflague, 5, 0, 0
 * Rue, null, 11, slingshot, 4, 0, 0
 * Thresh, null, 11, rock, 3, 0, 0
 */

var Katniss = new People ("Katniss", "Everdeen", 12, "bow and arrow", 10, 0, 0);
var Peeta = new People("Peeta", "Mellark", 12, "camoflague", 5, 0, 0);
var Rue = new People("Rue", "null", 11, "slingshot", 4, 0, 0);
var Thresh = new People("Thresh", "Null", 11, 'rock', 3, 0, 0);

/**
  * 3. Create 4 arrays that represent matches between two characters.
  * For example, you might have an array named match1 where the first index
  * of the array is the Katniss object and the second index is the Thresh object.
  */

var match1 = [Katniss, Thresh];
var match2 = [Rue, Peeta];
var match3 = [Katniss, Peeta];
var match4 = [Thresh, Rue];


/**
  * 4. Create an array, named matches. It will contain all the matches you
  * created above.
  */
 var matches = [match1, match2, match3, match4];
 // console.log(matches);
/**
  * 5. Create a function, named winner, that takes a single person object as
  * a parameter. The function will
  * - increment the winner's luck score by 1
  * - increment the winner's wins property by 1
  * BUT, the max luck score is 10.
  */
  function winner (person) {
    if(person.luck < 10){
    person.luck  += 1;
    person.wins += 1 ;
  } else if (person.luck == 10){
    person.wins += 1;
  }
    return person;
  }
  // console.log("Winner", winner(Rue));

/**
  * 6. Create a function, named battle, that takes a single match array as a
  * parameter.
  * The function will
  * - increment the matches property of each object
  * - return the winner of the match
  * The winner is the person with the highest luck score.
  */

function battle(match) {
    match[0].matches += 1;
    match[1].matches += 1;
    if(match[0].luck > match[1].luck){
      return match[0];
    } else {
      return match[1];
    }
}
 // console.log("battle", battle(match2));
/**
  * 7. Create a function, named runAllBattles, that takes an array of matches
  * as a parameter.
  * For each match array, invoke the battle function.
  * Pass the result of the battle function to the winner function.
  * Console log each person object after all battles have been completed.
  */
  function runAllBattles (arrayOfMatches) {
    arrayOfMatches.forEach(function (array) {
     battle();
     winner(battle());
    });

  }

/**
  * 8. Invoke the battle function with one of the matches you created above.
  * Pass the result of the battle function to the winner function.
  * Console log each person object.
  */
    // battle(match4);
    // winner(battle(match4));
    battle(match1);
    battle(match2);
    battle(match1);
    battle(match4);
    winner(battle(match1));
    winner(battle(match2));
    winner(battle(match3));
    winner(battle(match4));
    console.log(Katniss);
    console.log(Rue);
    console.log(Peeta);
    console.log(Thresh);
  /**
   * TAKEAWAYS
   * When we abstract our logic into functions, we can perform those functions
   * on one or more objects or arrays. This gives us more flexibility and
   * allows us to not repeat the same code in multiple places (DRY).
   */
