// make this function console.log anything you want
var helloWorld = function() {
	console.log("hello world");
}

// make this function log out "I love functions" to the console
var functionLove = function() {
	console.log("I love functions");
}

// make this a function where you console.log anything you want
var speak = function() {
	console.log("hey")
}

//this function should return a value with no parameters needed
var favoriteKitchenTool = function() {
	return "spatula"
}

// make this a function that returns a value given to it
var returnMe = function() {
	return 4
}

// make a function that returns your favorite number
var favoriteNumber = function() {
	return 18
}

// make a function that takes an order for the kitchen and returns it
var orderUp = function(order) {
	return order;
}

// make this a function that will turn the oven on and off.
// It should take a string ("on" or "off") as an argument,
// and return the string.
var oven = function(ovenState) {
	return ovenState;
}

// create a function that takes any number of cups, doubles
// that number, and returns the doubled amount of cups
var doubleRecipe = function(cups) {
	return cups * 2
}

export {
	helloWorld,
	functionLove,
	speak,
	favoriteKitchenTool,
	returnMe,
	favoriteNumber,
	orderUp,
	oven, 
	doubleRecipe
}
