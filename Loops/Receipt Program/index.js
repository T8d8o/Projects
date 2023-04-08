let customers = ["John S.", "Emma M.", "Frank T."];
let receipts = [
  ["eggs", "white bread", "milk"],
  ["milk", "cheese", "butter", "pancake mix", "flour"],
  ["cereal", "whole wheat bread", "milk", "cheese", "eggs", "vanilla"]
];
let prices = {
  "eggs": 3.50,
  "white bread": 4.50,
  "milk": 5.99,
  "cheese": 6.50,
  "butter": 3.45,
  "pancake mix": 4.50,
  "flour": 5.75,
  "cereal": 4.50,
  "whole wheat bread": 6.50,
  "vanilla": 8.75
};

function setElementText(id, text) {
  document.getElementById(id).innerText = text;
}

function populateTable() {
  for (let i = 0; i < customers.length; i++) {
    let customer = customers[i];
    let receipt = receipts[i];
    let receipt_list = "";
    let sum = 0;
    for (let j = 0; j < receipt.length; j++) {
      let item = receipt[j];
      let price = prices[item];
      receipt_list = receipt_list + item + "\n";
      sum = sum + price;
    }
    setElementText("customer" + i.toString(), customer);
    setElementText("receipt" + i.toString(), receipt_list);
    setElementText("total" + i.toString(), sum);
  }
}