const nav = document.querySelector('#nav');
const toggle = document.querySelector('#toggle');

toggle.addEventListener('click', evt => {
    nav.classList.toggle('active');
});