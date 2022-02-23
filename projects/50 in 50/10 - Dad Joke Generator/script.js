const button = document.querySelector('button');
const joke = document.querySelector('#joke');

const config = {headers: {accept: 'application/json'}};
const url = 'https://icanhazdadjoke.com/';

fetchNewDadJoke();

button.addEventListener('click', fetchNewDadJoke);


async function fetchNewDadJoke(){
    const res = await fetch(url, config);
    const data = await res.json();
    joke.innerHTML = data.joke;
}