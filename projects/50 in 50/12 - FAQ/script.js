const toggles = document.querySelectorAll('.faq-toggle');

for(let toggle of toggles){
    toggle.addEventListener('click', evt => {
        const i = evt.target;
        const button = i.parentElement;
        const faq = button.parentElement;
        faq.classList.toggle("active");
    });
}