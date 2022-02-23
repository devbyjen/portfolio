const open = document.querySelector("#open");
const close = document.querySelector("#close");
const container = document.querySelector(".container");


open.addEventListener("click", evt => { container.classList.add('show-nav'); });
close.addEventListener("click", evt => { container.classList.remove('show-nav'); });