let sales = [455, 505, 340, 780, 690, 880, 900, 685, 835, 754];
let customers = [25, 30, 20, 35, 36, 32, 44, 45, 34, 15];
let daysOfTheWeek = ["Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday", "Sunday"];

let firstWeekSales = sales.filter((element, index) => index < 7);
console.log("First Week Sales: " + firstWeekSales);

let firstWeekCustomers = customers.filter((element, index) => index < 7);
console.log("First Week Customers: " + firstWeekCustomers);

let firstWeekSalesSum = firstWeekSales.reduce((prev, curr) => prev + curr);
console.log("First Week Sales Sum: " + firstWeekSalesSum);

let firstWeekCustomersSum = firstWeekCustomers.reduce((prev, curr) => prev + curr);
console.log("First Week Customers Sum: " + firstWeekCustomersSum);

let firstWeekAverage = firstWeekSalesSum / 7;
console.log("First Week Average: " + firstWeekAverage);

let firstWeekCustomerAvg = firstWeekSalesSum /firstWeekCustomersSum ;
console.log("First Week Customer Average: " + firstWeekCustomerAvg);

let firstWeekDailyAverage = firstWeekSales.map(function(element, index) {
 return (element / firstWeekCustomers[index]);
});
let labeled = firstWeekDailyAverage.map(function(element, index){
 return daysOfTheWeek[index] + " " + element.toFixed(2);
});
let labeledString = labeled.reduce(function(prev, curr){
  return prev + ", " + curr});
console.log(labeledString);