// const emailSpans = document.querySelectorAll('#email-label span');
// const passwordSpans = document.querySelectorAll('#password-label span');
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');

// const delay = 0;
// for (e of emailSpans) {
//     e.style.transitionDelay = `${delay}ms`;
//     delay += 50;
// }
// for (p of passwordSpans) {
//     p.style.transitionDelay = `${delay}ms`;
//     delay += 50;
// }

const labels = document.querySelectorAll('.form-control label');

for (label of labels) {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
        .join('');
}