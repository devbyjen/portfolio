const buttons = document.querySelectorAll('button');

window.addEventListener('scroll', checkButtons);
checkButtons();

function checkButtons() {
    const triggerBottom = window.innerHeight * .8;
    for (button of buttons) {
        const top = button.getBoundingClientRect().top;
        console.log(`${triggerBottom} : ${top}`);
        if (top < triggerBottom) {
            button.classList.add('show');
        } else {
            button.classList.remove('show');
        }
    }
}
