const enterChoicesHere = document.querySelector('#enter-choices-here');
const choicesElement = document.querySelector('.choices');

enterChoicesHere.addEventListener('keyup', evt => {
    updateChoices();
     if(evt.key === 'Enter'){
        // enterChoicesHere.value='';
        pickRandomChoice();
    }
})

function updateChoices() {
    const choices = enterChoicesHere.value.trim().split(',');
    choicesElement.innerHTML='';
    console.log(choices);
    for(let choice of choices) {
        console.dir(choice);
        if(choice && choice !== 13){
            let choiceElement = document.createElement('span');
            choiceElement.innerHTML = choice;
            choiceElement.classList.add('choice');
            choicesElement.appendChild(choiceElement);
        }
    }
}

async function pickRandomChoice() {
    const choices = document.querySelectorAll('.choice');
    let highlighted=null;
    const interval = setInterval(()=> {
        if(highlighted!== null) {
            choices[highlighted].classList.remove('active');
        }
        highlighted = getRandomNumber(0, choices.length);
        choices[highlighted].classList.add('active');

    }, 100);

    setTimeout(() =>{
        clearInterval(interval);
    }, 3000);
}

function unHighlightTag() {

}

function getRandomNumber(min, max) {
    return Math.floor(Math.random()*max) + min;
}