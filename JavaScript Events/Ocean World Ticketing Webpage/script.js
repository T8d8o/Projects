const h1 = document.querySelector("h1");
h1.addEventListener("click", changeColor);

function changeColor() {
  h1.style.color = "darkturquoise";
}
h1.removeEventListener("click", changeColor);
const body = document.body;
const div = document.getElementById("ocean");
body.onscroll = function() {
  body.style.backgroundColor = "#b2f0f1";
  div.style.backgroundColor = "#b2f0f1";
};
const infobtn = document.getElementById("getinfo");
const infodiv = document.getElementById("info");
infobtn.onclick = function() {
  infodiv.style.visibility = "visible";
};
const bookbtn = document.getElementById("book");
const bookdiv = document.getElementById("form");
bookbtn.onclick = function() {
  bookdiv.style.visibility = "visible";
};
const tickets = document.getElementById("tickets");
const h4 = document.querySelector('h4');
tickets.oninput = function() {
  h4.innerText = "You are purchasing " + tickets.value + " tickets.";
};
const preference = document.getElementById("preference");
const secondH4 = document.getElementById('secondH4');
preference.onchange = function() {
  secondH4.innerText = "Your preference is : " + preference.value;
};