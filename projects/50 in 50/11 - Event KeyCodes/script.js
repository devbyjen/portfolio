const h1 = document.querySelector('h1');
const keyBox = document.querySelector('#key');
const keycodeBox = document.querySelector('#keycode');
const codeBox = document.querySelector('#code');
const keyCodeSections = document.querySelectorAll('.keyCodeSection');

document.addEventListener('keydown', evt => {
    if(!h1.getAttribute('hidden')){
        h1.setAttribute('hidden', true);
        keyCodeSections.forEach(section=> {section.classList.remove('hide');});
    }
    keyBox.innerHTML = evt.key;
    keycodeBox.innerHTML = evt.keyCode;
    codeBox.innerHTML = evt.code;
});