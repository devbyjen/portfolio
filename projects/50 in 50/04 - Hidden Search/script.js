const searchBtn = document.querySelector('#search-btn');
const search = document.querySelector('#search');


searchBtn.addEventListener('click', () => {
    if (search.classList.contains('hidden')) {
        search.classList.remove('hidden');
        search.focus();
    } else {
        search.classList.add('hidden');
    }
});