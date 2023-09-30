// Function to validate the message field for a minimum of 10 words
function validateMessage() {
    var message = document.getElementById("message").value.trim();
    var messageWords = message.split(/\s+/).filter(word => word.length > 0);
    return messageWords.length >= 10;
}

// Function to show error messages
function showError(id, message) {
    document.getElementById(id).textContent = message;
}

// Function to hide error messages
function hideError(id) {
    document.getElementById(id).textContent = "";
}

// Add event listeners for input fields
document.getElementById("name").addEventListener("blur", function () {
    var name = this.value.trim();
    if (name === "" || name.length < 3) {
        showError("name-error", "Name is required and must be at least 3 characters long");
    } else {
        hideError("name-error");
    }
});

document.getElementById("email").addEventListener("blur", function () {
    var email = this.value.trim();
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === "" || !emailPattern.test(email)) {
        showError("email-error", "Invalid email format");
    } else {
        hideError("email-error");
    }
});

document.getElementById("message").addEventListener("blur", function () {
    if (!validateMessage()) {
        showError("message-error", "Message must contain at least 10 words");
    } else {
        hideError("message-error");
    }
});

// Function to validate the entire form
function validateForm() {
    // Validate name
    var name = document.getElementById("name").value.trim();
    if (name === "" || name.length < 3) {
        showError("name-error", "Name is required and must be at least 3 characters long");
        return false;
    }

    // Validate email
    var email = document.getElementById("email").value.trim();
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === "" || !emailPattern.test(email)) {
        showError("email-error", "Invalid email format");
        return false;
    }

    // Validate message
    if (!validateMessage()) {
        showError("message-error", "Message must contain at least 10 words");
        return false;
    }

    // If all validations pass, the form can be submitted
    return true;
}
