const nameOnId = "Tate";
const nameOnPass = "Tate";
console.log("Passenger Name: " + nameOnPass);

const nameMatch = nameOnPass === nameOnId;
console.log("ID confirmed? " + nameMatch);

const length = 1;
const isLengthExcess = length < 30;

const height = 1;
const isHeightExcess = height < 55;
const isHandBaggageEligible = isLengthExcess && isHeightExcess;
console.log("Is Hand Baggage Eligible? " + isHandBaggageEligible);

const flightDes = "Italy";
const returnFrom = "Italy";
const isRoundTrip = flightDes === returnFrom;

console.log("Round Trip Check? " + isRoundTrip);

const bookings = 100;
const totalCapacity = 50;
const isFlightAvailable = bookings < totalCapacity;

console.log("Are seats available? " + isFlightAvailable);

document.querySelector("#name").innerHTML = nameOnPass;
document.querySelector("#id").innerHTML = nameMatch;
document.querySelector("#bag").innerHTML = isHandBaggageEligible;
document.querySelector("#des").innerHTML = isRoundTrip;
document.querySelector("#seat").innerHTML = isFlightAvailable;