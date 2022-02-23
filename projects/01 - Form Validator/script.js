// const submitButton = document.querySelector('.form-container button');
// const inputs = document.querySelectorAll('.form-container input');
// // const passwords = document.querySelectorAll('.form-container input:password');

// submitButton.addEventListener('click', () => {verifyAllInputs);

// function verifyAllInputs() {
//     let allTrue = true;
//     for(input of inputs) {
//         let isValid = true;
//         let value = input.innerText;
//         switch(input.name){
//             case 'password':
//                 isValid = checkPasswordValidity(value);
//             case 'username':
//                 isValid = checkUsernameValidity(value);
//             case 'email':
//                 isValid = checkEmailValidity(value);
//             case 'password2':
//                 isValid = checkPasswordValidity(value);
//         }
//         isValid? input.classList.add('success') : input.classList.add('failure');
//         alltrue = allTrue && isValid;
//         console.log(`input.name: ${input.name} value: ${value} isValid: ${isValid}`);
//     }
// }


// function checkPasswordValidity(value) {
//     return true;
// }
// function checkUsernameValidity(value) {
//     return false;
// }
// function checkEmailValidity(value) {
//     return false;
// }



const formControls = document.querySelectorAll('.form-control');
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

form.addEventListener('submit', e=> {
    e.preventDefault();
    checkRequired([username, email, password, password2]);

});

function checkRequired(inputArr) {
    for(input of inputArr) {
        input.value.trim? showSuccess(input) : showError(input, 'Required'); 
        console.log(input.value);
    }
}

function showError (input, message) {
    const formControl = input.parentElement;
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess (input) {
    const formControl = input.parentElement;
    formControl.classList.add('success');
}

function validateEmail(email) {
        const re = /[^@]+@[^@]+\.[^@]+/;
        return re.test(String(email).toLowerCase());
}
