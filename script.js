const inner = document.querySelector(".inner");
const section = document.querySelector("section");

window.onscroll = function() {
  let value = window.pageYOffset / section.offsetTop + 1;
  inner.style.transform = `scale(${value})`;
};
console.log("hello world");