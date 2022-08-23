document.addEventListener("DOMContentLoaded", function (event) {
  // Change color of heart on every refresh page
  const heart = document.querySelector(".fa-heart");
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  heart.style.color = "#" + randomColor;
});

const imgs = [
  "../imgs/cat-programming-1.png",
  "../imgs/cat-programming-2.png",
  "../imgs/cat-programming-3.png",
  "../imgs/cat-programming-4.png",
  "../imgs/cat-programming-5.png",
  "../imgs/cat-programming-6.png"
];
const size = imgs.length;
const x = Math.floor(size*Math.random())
console.log(x)
console.log(imgs[x])
document.getElementById('changing-photo').src=imgs[x];
