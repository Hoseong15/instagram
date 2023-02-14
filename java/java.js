let button = document.querySelector('.dark');
let inputdark = document.querySelector('.insta')
let box = document.querySelector('.box');
let box1 = document.querySelector('.box1')
let login = document.querySelector('.login')
let body = document.querySelector('body')
let app = document.querySelector('.app-text>p')
let last = document.querySelector('.last-text')

button.addEventListener('click', function() {
  inputdark.classList.toggle('dark')
  box.classList.toggle('dark')
  box1.classList.toggle('dark')
  login.classList.toggle('dark')
  body.classList.toggle('dark')
  app.classList.toggle('dark')
  last.classList.toggle('dark')
  document.querySelector('.logo a>img').src = "./images/logo-dark.png"
})

const buttons = document.querySelector(".dark");
const list = document.querySelectorAll(".footer-list a");

buttons.addEventListener("click", function() {
  for (let i = 0; i < list.length; i++) {
    list[i].style.color = "#d2d2d2";
  }
});

