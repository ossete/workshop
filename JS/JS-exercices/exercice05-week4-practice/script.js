/* JS Functions
Create a function who returns the area of a surface in m2. 
Return a string like "The area is your number here m2" */

// FUNCTION 1
function surfaceCalc(width, length) {

  let surface = width * length;
  return "The area is " + surface + " m2.";

}
// console.log(surfaceCalc(10, 5));


// FUNCTION 2 - ceil
function surfaceCalcNet(width, length) {

  surfaceNet = Math.ceil(width * length);
  return "The area is " + surfaceNet + " m2.";

}
// console.log(surfaceCalcNet(10, 5.11));


// FUNCTION 3 - floor
function surfaceCalcNet2(width, length) {

  surfaceNet = Math.floor(width * length);
  return "The area is " + surfaceNet + " m2.";

}
// console.log(surfaceCalcNet2(10, 5.11));

// Extract City Facts exercice

/* function cityFacts(city) {
	let name = "Nowhere";
	let population = "100";
  let continent = "in my mind."
  
	return name + " has a population of " + population + " and is situated in " + continent;
}
console.log(cityFacts()); */

// HOW CAN I CHANGE THIS FUNCTION TO THIS: return this.name +... HOW CAN USE "this."
let city = {name: "This city", population: "100", continent: "europe"};

function cityFacts2(city) {

return city.name + " has a population of " + city.population + " and is situated in " + city.continent;
}
console.log(cityFacts2(city));

