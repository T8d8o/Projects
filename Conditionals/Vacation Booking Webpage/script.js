const beds = 6;
const reviewScore = 4.78;
const costPerNight = 140;
const pool = true;
const country = "Italy";
const listItemArray = document.querySelectorAll("li");
const minBeds = 5;
const minReviewScore = 3.5;
const maxCostPerNight = 150;
const needPool = true;
const inCountry = "Italy";
let match = true;
let saving;
let message;
if (beds < minBeds){
  match = false;
} else if (reviewScore < minReviewScore){
  match = false;
} if (needPool && !pool) {
  match = false;

} if (inCountry !== country){
match = false;
} if (costPerNight > maxCostPerNight){
match = false;
} else {
  saving = maxCostPerNight - costPerNight;
} if(match){
  message = "This property is a match!";
  if (saving){
  message = message + " It is $" + saving + " cheaper than your maximum.";
  }
} if (match) {
  document.getElementById('message').innerText = message;
} else {
  document.getElementById('message').innerText = "Sorry, this property is not suitable.";
}
listItemArray[0].innerHTML = "Beds: " + beds;
listItemArray[1].innerHTML = "Review Score: " + reviewScore;
listItemArray[2].innerHTML = "Cost: " + costPerNight;
listItemArray[3].innerHTML = "Pool: " + ((pool) ? "Yes" : "No");
listItemArray[4].innerHTML = "Location: " + country;
listItemArray[5].innerHTML = "Minimum beds: " + minBeds;
listItemArray[6].innerHTML = "Minimum Review Score: " + minReviewScore;
listItemArray[7].innerHTML = "Maximum Cost: " + maxCostPerNight;
listItemArray[8].innerHTML = "Must Have Pool: " + ((needPool) ? "Yes" : "No");
listItemArray[9].innerHTML = "Location: " + inCountry;