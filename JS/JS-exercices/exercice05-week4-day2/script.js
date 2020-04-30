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

// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

function numberOfFrames (input, fps = 60) {
  let totalFps = input * fps * 60;
  return totalFps;
}
console.log(numberOfFrames(10));

// Calculate the Profit
// You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar. Assume all of the inventory has been sold

function profit(buy, sell, quantity) {
  let profit = (sell - buy) * quantity;
  return profit;
}
console.log(profit(5,10,100));

objectName = {
  buy: 4,
  sell: 10,
  quantity: 10
}

function profit2(objectName) {

  let profit2 = (objectName.sell - objectName.buy) * objectName.quantity;
  return (profit2);
}
console.log(profit2(objectName));


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

