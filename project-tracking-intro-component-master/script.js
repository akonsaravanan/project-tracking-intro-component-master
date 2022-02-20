const hamburger = document.querySelector(".hamburger");
const list = document.querySelector("nav ul");

hamburger.addEventListener("click", function (e) {
  hamburger.classList.toggle("active");
  list.classList.toggle("active");
});
