const cards = document.querySelectorAll(".card");

for (card of cards) {
    card.addEventListener('click', evt => {
        let clickedCard = evt.target.parentElement;
        console.dir(clickedCard);
        removeActiveClasses();
        clickedCard.classList.add('active');
        //reopen this card
    })
}

function removeActiveClasses() {
    for (card of cards) {
        card.classList.remove('active');
    }
}