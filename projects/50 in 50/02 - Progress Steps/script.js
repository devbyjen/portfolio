const steps = document.querySelectorAll(".circle");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const progress = document.querySelector('.progress');

let currentStep = 0;
prevBtn.addEventListener('click', evt => {
    if (currentStep === 3) {
        nextBtn.removeAttribute('disabled');
    }
    removeStep();
    currentStep--;
    addStep();
    if (currentStep === 0) {
        prevBtn.setAttribute("disabled", true);
    }
});

nextBtn.addEventListener('click', evt => {
    if (currentStep === 0) {
        prevBtn.removeAttribute('disabled');
    }
    // removeStep();
    currentStep++;
    addStep();
    if (currentStep === 3) {
        nextBtn.setAttribute("disabled", true);
    }
});

function removeStep() {
    steps[currentStep].classList.remove('active');
    progress.classList.remove(`progress${currentStep}`);
}
function addStep() {
    progress.classList.add(`progress${currentStep}`);
    steps[currentStep].classList.add('active');
}