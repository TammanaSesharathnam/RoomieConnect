document.querySelector(".login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    let isValid = true; // To check if all fields are valid

    // Reset any previous error messages
    const resetError = (inputElement) => {
        const errorBox = inputElement.nextElementSibling;
        if (errorBox && errorBox.classList.contains("error-box")) {
            errorBox.remove();
        }
        inputElement.classList.remove("error-border");
    };

    // Display an error message
    const showError = (inputElement, message) => {
        resetError(inputElement); // Clear previous error
        const errorBox = document.createElement("div");
        errorBox.className = "error-box";
        errorBox.textContent = message;
        inputElement.parentElement.insertBefore(errorBox, inputElement.nextSibling);
        inputElement.classList.add("error-border");
        isValid = false;
    };

    // Validate email/phone field
    const emailOrPhone = document.querySelector("input[type='email']");
    if (emailOrPhone.value.trim() === "") {
        showError(emailOrPhone, "Please enter your email or phone.");
    } else {
        resetError(emailOrPhone);
    }

    // Validate password field
    const password = document.querySelector("input[type='password']");
    if (password.value.trim() === "") {
        showError(password, "Please enter your password.");
    } else {
        resetError(password);
    }

    // Redirect if all fields are valid
    if (isValid) {
        window.location.href = "home.html"; // Redirect to the home page
    }
});
