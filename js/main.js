var totalCost;
var numPeople;
var tipRate;

var calcTip = document.getElementById("calc_tip");
var calcTipEach = document.getElementById("calc_tip_each");
var paragraph = document.getElementsByTagName('p');

//Update input values
var update = function() {
	totalCost = document.getElementById("total_cost");
	numPeople = document.getElementById("number_people");
	tipRate = document.getElementById("tip_rate");
};

//Convert element values to integers
var convertStringToInt = function(element) {
	return parseInt(element.value, 10);
};

//Calculate tip for entire check
var tipOfCheck = function(check, checkTipRate) {
	if (checkTipRate !== 0)
		return (check * (checkTipRate/100));
	else
		return check;
};

//Calculate tip of entire check for each person
var tipEachPerson = function(check, checkTipRate, people) {
	return tipOfCheck(check, checkTipRate)/people;
};


// Pass in totalCost, tipRate
calcTip.onclick = function() {
	console.log("here");
	update();
	totalCost = convertStringToInt(totalCost);
	tipRate = convertStringToInt(tipRate);

	paragraph[0].innerHTML = "Tip for this meal is<br/>blergh";

	// tipOfCheck(totalCost, tipRate)

};

//Calculate tip for each person when button is clicked
calcTipEach.onclick = function() {
	console.log("here");
	update();
	totalCost = convertStringToInt(totalCost);
	tipRate = convertStringToInt(tipRate);
	numPeople = convertStringToInt(numPeople);

	paragraph[1].innerHTML = tipEachPerson(totalCost, tipRate, numPeople);
};

