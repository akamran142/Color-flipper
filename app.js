const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let btn = document.getElementById("btn");
let color = document.querySelector(".color");
let h2 = document.querySelector(".h2-clr");

btn.addEventListener("click", function () {
  document.body.style.backgroundColor = colors[randomNumber()];
  color.textContent = colors[randomNumber()];
});

function randomNumber() {
  return Math.floor(Math.random() * colors.length);
}
