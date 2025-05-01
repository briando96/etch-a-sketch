const form = document.querySelector("#registerform");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirmpassword");

form.addEventListener("submit", function(event) {
    if (passwordInput.value !== confirmInput.value) {
        event.preventDefault()
        confirmInput.setCustomValidity("Passwords do not match.");
    } else {
        confirmInput.setCustomValidity("");  // Clear previous error if valid
    }
});


confirmInput.addEventListener("input", function () {
    if (passwordInput.value === confirmInput.value) {
        confirmInput.setCustomValidity("");
    }
});