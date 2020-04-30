/* CONDITIONS
------------------------------------*/
let num = 5;
let num2 = 20;

//Comparison operators :
// > greater than
// < less than
// >= greater or equal to
// <= less or equal to
// == equal to
// === equal to and the same type
// != NOT equal to
// !== NOT equal and not the same type

//A SIMPLE CONDITION
if(num > 5) {
  console.log("Simple check:", "TRUE!");
}
else {
  console.log("Simple check:", "FALSE!");
}

//A STRICT EQUALITY CHECK CONDITION
if(num === 5) {
  console.log("Strict equality:", "TRUE!");
}
else {
  console.log("Strict equality:", "FALSE!");
}


//A DOUBLE CKECK WITH "OR" (logical operator)
//One of the conditions must be true
if(num > 5 || num2 < 30) {
  console.log("Double check with OR:", "TRUE");
}

//A DOUBLE CKECK WITH "AND" (logical operator)
//Both conditions must be true
if(num > 5 && num2 < 30) {
  console.log("Double check with AND:", "TRUE");
}


//USING NOT OPERATOR
if(num != "5") {
  console.log("not operator: TRUE!");
}

//COMPLEX CHECKS
            //FALSE                      //FALSE
if((num === 5 && num > 5) || (num2 == 20 && num2 > 20)) {
  console.log("complex cond: TRUE!");
}

let num3 = 3 - 6 + 1; //-4
let num4 = (3 - 3) * (2 + 1); //0


// CHALLENGE
function message(customHour = null) {


  //1. Initialize variables :
  let hour    = false; //
  let output  = "";    //empty string


  //2. IF "customHour" HAVE a value, use the value of "customHour"
  if(customHour) {
    hour = customHour;
  }

  //ELSE → "customHour" DO NOT have a value, use this :
  else {
    let date = new Date();
    hour = date.getHours(); //console.log(hour);
  }


  //3. CONDITIONS
  if(hour < 8) {
    output = "What are you doing that early?";
  }
  if(hour >= 8 && hour < 12) {
    output = "Good morning!";
  }
  if(hour >= 12 && hour < 17) {
    output = "Good afternoon!";
  }
  if(hour >= 17 && hour < 21) {
    output = "Good evening!";
  }
  if(hour >= 21) {
    output = "Good night!";
  }


  //4. OUTPUT
  console.log("Hour message:", output);


}

message(); //empty argument = function will use JS hour
message(9); //with an argument, function will use this value
// message(12);
// message(15);
// message(18);
// message(21);