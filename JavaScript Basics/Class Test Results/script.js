const maxPoints = 120;
const passingPoints = 70;
const samPoints = 84;
let alexPoints = 75;
const jessiePoints = 99;
let didAlexPass = false;

let samPointsDisplay = "Sam earned " + samPoints + " points out of " +
maxPoints;
console.log(samPointsDisplay);
let alexPointsDisplay = "Alex earned " + alexPoints + " points out of " +
  maxPoints;
console.log(alexPointsDisplay);
let jessiePointsDisplay = "Jessie earned " + jessiePoints + " points out of " +
  maxPoints;
console.log(jessiePointsDisplay);
let samPercentage = (samPoints / maxPoints) * 100;
const samPercentDisplay = "Sam scored " + samPercentage + "%";
console.log(samPercentDisplay);
let alexPercentage = (alexPoints / maxPoints) * 100;
const alexPercentDisplay = "Alex scored " + alexPercentage + "%";
console.log(alexPercentDisplay);
let jessiePercentage = (jessiePoints / maxPoints) * 100;
const jessiePercentDisplay = "Jessie scored " + jessiePercentage + "%";
console.log(jessiePercentDisplay);
let samMissedPoints = maxPoints - samPoints;
let samMissedPointsDisplay = "Sam missed " + samMissedPoints + " points";
console.log(samMissedPointsDisplay);
let alexMissedPoints = maxPoints - alexPoints;
let alexMissedPointsDisplay = "Alex missed " + alexMissedPoints + " points";
console.log(alexMissedPointsDisplay);
let jessieMissedPoints = maxPoints - jessiePoints;
let jessieMissedPointsDisplay = "Jessie missed " + jessieMissedPoints +
  " points";
console.log(jessieMissedPointsDisplay);
const classAveragePoints = (samPoints + alexPoints + jessiePoints) / 3;
const classAveragePercent = (classAveragePoints / maxPoints) * 100;
const classAvgDisplay = "The class average was " + classAveragePoints +
  " points or " + classAveragePercent;
console.log(classAvgDisplay);

didAlexPass = !didAlexPass;
const alexPointsUpdated = "Alex failed initially, but did extra credit. Their new score is " + alexPoints + " out of " + maxPoints;
console.log(alexPointsUpdated);

const listItemArray = document.querySelectorAll("li");
listItemArray[0].innerHTML = "Raw Points:";
listItemArray[4].innerHTML = "Percentages:";
listItemArray[8].innerHTML = "Missed Points:";
listItemArray[12].innerHTML = "Final Notes:";