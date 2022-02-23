const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', evt => {
    console.log('enter left');
    left.classList.add('active');
    right.classList.add('inactive');
});
left.addEventListener('mouseleave', evt => {
    console.log('exit left');
    left.classList.remove('active');
    right.classList.remove('inactive');
});
right.addEventListener('mouseenter', evt => {

    console.log('enter right');
    right.classList.add('active');
    left.classList.add('inactive');
});
right.addEventListener('mouseleave', evt => {

    console.log('exit right');
    right.classList.remove('active');
    left.classList.remove('inactive');
});