var averageSpeed = 57;
var mpg = 27;
var gallons = 13;
var destination = "Ithaca, NY";
var tripMiles = 74 + 63 + 167;

var time = tripMiles / averageSpeed;


var tankRange = mpg * gallons;
var leftoverGasRange = tankRange - tripMiles;

console.log("Trip to " + destination);
console.log("Estimated Time: " + time);
console.log("Range Remaining: " + leftoverGasRange);