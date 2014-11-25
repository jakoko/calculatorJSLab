//Convert element values to integers
var convertStringToInt = function(element) {
	return parseInt(element.value, 10);
};

// //Convert percent to decimal
// var percentToDec = function(percent) {
// 	return percent/100;
// };

//Calculate tip for entire check
var tipOfCheck = function(check, checkTipRate) {
	return (check * (checkTipRate/100));
};

//Calculate tip of entire check for each person
var tipEachPerson = function(check, checkTipRate, people) {
	var tip = tipOfCheck(check, checkTipRate);
	return tip/people;
};


var totalCost = document.getElementById("total_cost");
var numPeople = document.getElementById("number_people");
var tipRate = document.getElementById("tip_rate");

var calculate = document.getElementById("calculate");
var paragraph = document.getElementsByTagName('p');

//Update input values
var update = function() {
	totalCost = document.getElementById("total_cost");
	numPeople = document.getElementById("number_people");
	tipRate = document.getElementById("tip_rate");
};

// Pass in totalCost, tipRate
calc_tip.onclick = function() {
	update();
	totalCost = convertStringToInt(totalCost);
	tipRate = convertStringToInt(tipRate);

	paragraph[0].innerHTML = tipOfCheck(totalCost, tipRate);
};

calc_tip_each.onclick = function() {
	update();
	totalCost = convertStringToInt(totalCost);
	tipRate = convertStringToInt(tipRate);
	numPeople = convertStringToInt(numPeople);

	paragraph[0].innerHTML = tipEachPerson(totalCost, tipRate, numPeople);
};

//Function to calculate total tip and tip for each person









// var intTotalCost;

// calculate.onclick  = function() {
// 	console.log("This is totalCost", totalCost.value);
// 	console.log("totalCost's type", (typeof totalCost.value));

// 	intTotalCost = parseInt(totalCost.value, 10);
// 	console.log("intTotalCost's type is " , typeof intTotalCost);
// 	console.log("This is intTotalCost:", intTotalCost);
// 	totalCost = intTotalCost;
// 	console.log(totalCost);

// 	// console.log(totalCost.value);
// };