/* CONDITIONS
------------------------------------ */
let num = 5;
let num2 = 20;

// Comparison operators:
// > greater than
// < less than
// >= greater or equal to
// <= less or equal to
// == equal to
// === equal to and the same type
// != not equal to
// !== not equal and not the same type

// A SIMPLE CONDITION WHO USES GREATER THAN OPERATOR
if(num > 6) {
  console.log("TRUE!");
}
else {
  console.log("FALSE!");
}

// A STRICT EQUALITY CHECK CONDITION
if(num === 5) {
  console.log("TRUE!");
}
else {
  console.log("FALSE!");
}

//A DOUBLE CHECK WITH "OR" (logical operator)
//One of the conditions must be true
if(num > 5 || num2 < 30) {
  console.log("double check", "TRUE")
}

//A DOUBLE CHECK WITH "AND" (logical operator)
//Both conditions must be true
if(num > 5 && num2 < 30) {
  console.log("double check AND", "TRUE");
}

//USING NOT OPERATOR
if(num != 5 ){
  console.log("not operator: TRUE!");
}

//COMPLEX CHECKS
if(num === 5 && num > 5 || num2 == 20 || num2 > 20 ){
  console.log("complex cond: TRUE!");
}
let num3 = 3 - 3 * 2 + 1;
// CHALLENGE

function message (hour) {
 
  if(hour < 8) {
    console.log("What are you doing that early?")
  }
  if (hour >= 8 && hour < 12){
    console.log("Good morning")
  }
  if (hour >= 12 && hour < 17){
    console.log("Good afternoon")
  }
  if (hour >= 17 && hour < 21){
    console.log("Good evening")
  }
  if (hour > 21){
    console.log("Good night")
  }
}
message(-1);