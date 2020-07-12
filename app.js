const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message;
}
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'

}

function checkField(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value === '') {
            showError(input, `${capital(input)} is required`)
        }
        else {
            showSuccess(input)
        }
    })
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${capital(input)} must be atleast ${min}`)

    } else if
        (input.value.length > max) {
        showError(input, `${capital(input)} must be less than ${max}`)

    }
    else {
        showSuccess(input)
    }
}
function capital(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1,);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkField([username, email, password, password2])
    checkLength(username, 3, 15)
    checkLength(password, 6, 15)
})





































 // if(username.value === '') {
    //     showError(username, 'username is required afina')
    // }
    // else {
    //     showSuccess(username)
    // }



    // if (email.value === '') {
    //     showError(email, 'email is required')
    // }
    // else {
    //     showSuccess(email)
    // }



    // if (password.value === '') {
    //     showError(password, 'password is required')
    // }
    // else {
    //     showSuccess(password)
    // }



    // if (password2.value === '') {
    //     showError(password2, 'password2 is required ')
    // }
    // else {
    //     showSuccess(password2)
    // }