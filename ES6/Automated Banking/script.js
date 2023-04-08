let accountBalance = 6500;
const deposit = (amount, pinCheck) => {
   if (pinCheck){
     console.log("Depositing: $" + amount);
    accountBalance += amount;
    return true;
  } else {
    return false;
  }
};
const withdraw = (amount, pinCheck) => {
  if (pinCheck && checkMinBalance(amount)) {
  console.log("Withdrawing: $" + amount);
  accountBalance -= amount;
  return true;
  } else {
  return false; 
  }
};
const balance = () =>  "Your balance is currently: $" + accountBalance;
const greeting = (name) => "Welcome to your automated banking portal, " + name + ".";
const pin = (inputPin) => inputPin === 1568;
const checkMinBalance = (withdrawalAmt) => withdrawalAmt < accountBalance;
console.log(greeting("Jane"));
console.log(balance());
if (deposit(50, pin(1568))) {
  console.log(balance());
}
if (withdraw(1200, pin(1568))) {
  console.log(balance());
}
if (withdraw(6600, pin(1568))) {
  console.log(balance());
}
