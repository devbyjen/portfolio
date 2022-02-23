const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');


let load = 0;
let int = setInterval(blurring, 30);

function blurring() {
    load++;
    loadText.innerText = `${load}%`;
    let opacity = (100 - load) / 100
    let blur = 100 - load;
    loadText.style.opacity = opacity;
    bg.style.filter = `blur(${blur}px)`;
    console.log(opacity);

    if (load > 99) {
        clearInterval(int);
    }
}