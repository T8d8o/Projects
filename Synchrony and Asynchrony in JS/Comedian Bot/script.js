const joke = ["If the internet is a boat, where would they park it?",
  "Google doc."
];
let para = document.querySelector("p");
let count = 0;
const interval = setInterval(function() {
  para.innerHTML += ".";
  count++;
  if (count == 3) {
    para.innerHTML += "<br>" + "Ok got one";
  }
}, 500);
setTimeout(function() {
  para.innerHTML += "<br>" + joke[0];
  clearInterval(interval);
}, 2000);
setTimeout(function() {
  para.innerHTML += "<br>" + joke[1];
}, 4000);