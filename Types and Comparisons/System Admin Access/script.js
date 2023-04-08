const accountRegular = "regular";
const accountAdmin = "admin";
let accountStatus = "active";
const isAdmin = accountAdmin == "admin";
const isValid = accountStatus != "inactive";
console.log("admin: " + isAdmin);
console.log("Valid: " + isValid);