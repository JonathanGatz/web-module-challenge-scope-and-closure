// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * ********* Counter 2 variable is outside of the scope (which can be referenced within the scope) *********
 * ********* counter 1 variable is inside the scope (which can't be referenced outside the scope) *********
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * ********* counter2 uses clouser becuase it is calling variables from outside the scope. *********
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *********Counter 2: Security feature perhaps? If you would not want anyone to know exaxtly where you called the varable from... or less repetition*********||
 *********Counter 1: If you wanted to change a verable that was considered "const" within the global scope********||
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(max) { 
return Math.floor(Math.random() * Math.floor(max));
//********* I used this "max" value to represent the height possible value "0-3"*********||
}
console.log(inning(3));

// function inning(){
//   let score = Math.floor(Math.random() * 3)
//   return score
//  }
//  console.log(inning())


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

*/ 

// function finalScore(inning, numInnings ) {
//   let runsPerInning = [ {
//     'Home': inning(),
//     'Away': inning()
//   }]
//   for (let i=0; i <= numInnings; i++) {
//     runsPerInning['Home'] = inning() + numInnings;
//     runsPerInning['Away'] = inning() + numInnings;
//   }
//   return runsPerInning;
// }
// console.log(finalScore(inning, 9));

let home = "The Home score is";
let away = "The Away score is";
//********Using lexical scope to access these variables from inside of the function********||

function finalScore(inning, home, away){
  /*Code Here*/
  for (let i in finalScore) {
    inning[i]
  }
}
console.log(home, inning(10, 0)); 
console.log(away, inning(10, 0));


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */


let one = "1st inning";
let two = "2nd inning"
let three = "3rd inning"
let four = "4th inning"
let five = "5th inning"
let six = "6th inning"
let seven = "7th inning"
let eight = "8th inning"
let nine = "9th inning"
let final = "The final score is"

function scoreboard (inning, one, two, three, four, five, six , seven, eight, nine, final) {
  return one, two, three, four, five, six, seven, eight, nine, final + inning;
}

console.log(one, inning(10, 0), inning(10, 0)); 
console.log(two, inning(10, 0), inning(10, 0)); 
console.log(three, inning(10, 0), inning(10, 0)); 
console.log(four, inning(10, 0), inning(10, 0)); 
console.log(five, inning(10, 0), inning(10, 0)); 
console.log(six, inning(10, 0), inning(10, 0)); 
console.log(seven, inning(10, 0), inning(10, 0)); 
console.log(eight, inning(10, 0), inning(10, 0)); 
console.log(nine, inning(10, 0), inning(10, 0));
console.log(final, inning(10, 0), inning(10, 0));




// let numInnings = [];
// function scoreboard(inning, numInnings) {
//   let inningScoreHome = 0
//   let inningScoreAway = 0

//   for (let i=1; i<=numInnings; i++) {
//     inningScoreHome = inningScoreHome + inning();
//     inningScoreAway = inningScoreAway + inning();
//     if (i === 1) {
//       console.log("1st inning" , inning(20, 0), inning(10, 0));
//       //*********I decided to mix up the different paramators. I wanted to test different ways/ideas on how to print numbers.*********||
//       //console.log(`${i}st inning: ${inningScoreHome} - ${inningScoreAway}`)
//     } else if (i === 2) {
//       console.log("2nd inning" , inning(20, 0), inning(10, 0));
//       //console.log(`${i}nd inning: ${inningScoreHome} - ${inningScoreAway}`)
//     } else if (i === 3) {
//       console.log(`${i}rd inning: ${inningScoreHome} - ${inningScoreAway}`)
//     } else console.log(`${i}th inning: ${inningScoreHome} - ${inningScoreAway}`)
//     //********* I am using "th" to print with the remainder*********||
//     //*********I am passing through code that was created within this specific function. *********||
//     }
//     console.log("Final Score" , inning(20, 0,), inning(10, 0));
// }

// console.log(scoreboard(inning, 9));





