// Equality of 3 Values
// Create a function that takes three integer arguments (a, b, c) and returns the amount of integers which are of equal value.

function equal(a, b, c) {
	if (a == b && b == c) {
		return 3;
	}
	else if ( (a == b && a != c) || (b == c && a != c )  || (a == c && b != c ) ){
		return 2;
	}
	else {
		return 0;
	}
}

// Strictly Increasing or Decreasing
// Create a function that takes an array and determines whether it's strictly increasing, strictly decreasing, or neither.

// let arr = ["0", "1", "2"]
// function check(arr) {
// 	if (arr[0] < arr[1] || arr[1] < arr[2]) {
// 		return "increasing"
// 	}
// 	else if (arr[0] > arr[1] || arr[1] > arr[2]) {
// 		return "decreasing"
// 	}
// 	else {
// 		return "neither"
// 	}
// 	console.log(check(arr));
// }

//ADD "uslu sayilar" AND THEN IT SHOULD WORK EX: (-2 UZERI 2)
// let arr = ["-1", "-2", "-3"]
// function check(arr) {
// 	if (arr[0] < arr[1] || arr[1] < arr[2]) {
// 		return "increasing"
// 	}
// 	else if (arr[0] * (-1) > arr[1] * (-1) || arr[1] * (-1) > arr[2] * (-1)) {
// 		return "increasing"
// 	}
// 	else if (arr[0] > arr[1] || arr[1] > arr[2]) {
// 		return "decreasing"
// 	}
// 	else {
// 		return "neither"
// 	}
// }
let arr = [1, 2, 1]
function check(arr) {
	if (arr[0] < arr[1] && arr[1] < arr[2]) {
		return "increasing"
	}
	else if (arr[0] > arr[1] && arr[1] > arr[2]) {
		return "decreasing"
	}
	else {
		return "neither"
	}
}
// console.log(check(arr));


// JS Loops
// Count genders
// Create an array containing 6 persons, girls and boys. Each person should have 2 keys, name and gender.
// Loop into the array and check how many girls and boys do you have. The output should be something like : "My list contains 2 girls and 4 boys"

let group = [
	{
		name: "Princess",
		gender: "female"
	},
	{
		name: "Bashful",
		gender:"male"
	},
	{
		name:"Doc",
		gender:"male"
	},
	{
		name:"Grumpy",
		gender:"male"
	},
	{
		name:"Happy",
		gender:"male"
	},
	{
		name:"Sleepy",
		gender:"male"
	}
]

let amountFemale = 0;
let amountMale= 0;

group.forEach(function(element){
  if(element.gender === "male"){
    amountMale++;
  }else {
    amountFemale++;
  }
});

console.log(" My list contains " + amountFemale + " female and " + amountMale + " male." );



// HTML DOM
// In your HTML page, create an <h1> title with any text content
// Use your "DOM" knowledge to modify the <h1> tag (in this order) :
// 		Get the text content
// 		Change text content
// 		Add an id attribute with the value of main-title
// 		Add a class attribute with the value of title
// 		Each time you do something, display it into the console.

// GETTING TEXT CONTENT
const h1 = document.querySelector('h1');
console.log(h1.innerHTML);

// CHANGING TEXT
h1.innerHTML = "This is the new content";
console.log(h1.innerHTML);

// ADDING ID AND CLASS
h1.setAttribute('id', 'main-title');
h1.setAttribute('class', 'title');