document.addEventListener("DOMContentLoaded", function (event) {
  // Change color of heart on every refresh page
  const heart = document.querySelector(".fa-heart");
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  heart.style.color = "#" + randomColor;
});
