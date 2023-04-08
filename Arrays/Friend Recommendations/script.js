const ashersFriends = [];
const samsFriends = [];
const friendsRecommendationAsher = [];
samsFriends.push("morgan", "riley", "jessie", "skyler", "frankie");
ashersFriends.push("morgan", "aiden", "angel", "ariel", "skyler");
 for (let i = 0; i < samsFriends.length; i++){
   var currentFriend = samsFriends[i];
   var isCommonFriend = ashersFriends.includes();
   if (isCommonFriend === false){
     friendsRecommendationAsher.push(currentFriend);
   }
 }
 console.log("Friends Recommended for Asher:");
 console.log(friendsRecommendationAsher);