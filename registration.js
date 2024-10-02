import User from 'User.js' 

document.addEventListener("DOMContentLoaded", function() {
    const state = {
        vision: {
            isEqualPassAndConfPass: true,
            isValidEmail: false
        }   
    }

    const form = document.querySelector("#registration");

    form.addEventListener("submit", (event) => {
        registration(event);
    })
})

function registration(event) {
    event.preventDefault();

    const form = event.target();
    const formData = new FormData(form);

    const email = formData.get("email");
    const pass = formData.get("pass");
    const confirmPass = formData.get("confirmPass");

    if (pass != confirmPass) {
        state.vision.isEqualPassAndConfPass = false;
    }

    if (isValidEmail(email)) {
        state.vision.isValidEmail = true;
    }

    console.log(`Email: ${email}`);
    console.log(`Pass: ${pass}`);
    console.log(`Confirmed pass: ${confirmPass}`);
}

function isValidEmail(str) {
    //validate url
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailPattern.test(str);
}