var price = 2.50;
var campers = 15;
console.log(price);
console.log(campers);
var taxRate = .08;
console.log(taxRate);
var budget = 40;
var total = price * campers * (1+ taxRate);
console.log(total);
var totalExceedsBudget = total > budget;
console.log("Total Exceeds Budget? " + totalExceedsBudget);
let taxApplied = total > price * campers;
console.log("Tax Applied? "+ taxApplied);