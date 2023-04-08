const participants = [];
participants.push("Ada", "Bruce", "Carlos", "Dahlia", "Eugene", "Fana");
console.log("Participants: " + participants);
participants.pop();
console.log("Participants: " + participants);
participants[2] = "Chavo";
console.log("Participants: " + participants);
console.log("Number of participants in the raffle: " + participants.length);
let namesCharacters = 0;
for (let i = 0; i < participants.length; i++) {
  console.log(participants[i]);
  namesCharacters = namesCharacters + participants[i].length;
}
const luckyIndex = namesCharacters % participants.length;
console.log("Congratulations " + participants[luckyIndex]);