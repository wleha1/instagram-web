import {fs} from 'fs';


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#login");

    form.addEventListener("submit", (event) => {
        login(event);
    })
})

function login(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const email = formData.get("email");
    const pass = formData.get("pass");

    User.login(email, pass)

}