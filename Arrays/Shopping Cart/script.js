const book = 40;
const gardeningTools = 30;
const headphones = 50;
const mat = 25;
const wishlist = [book, gardeningTools, headphones, mat];
const cart = [];
let item1 = wishlist.pop(3);
const item2 = wishlist.pop(2);
cart.push(item1, item2);
console.log("Cart prices:");
console.log(cart);
const total = item1 + item2;
console.log("Total: " + total);