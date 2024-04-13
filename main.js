var nav = document.querySelector(".nav");
var menuOpen = document.querySelector(".menuOpen");
var menuClose = document.querySelector(".menuClose");

menuOpen.addEventListener("click", function () {
  nav.style.display = "flex";
  menuOpen.style.display = "none";
  menuClose.style.display = "block";
});

menuClose.addEventListener("click", function () {
  nav.style.display = "none";
  menuOpen.style.display = "block";
  menuClose.style.display = "none";
});
