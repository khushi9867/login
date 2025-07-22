document.addEventListener("DOMContentLoaded", function() 
    const form = document.querySelector("form");
    const nameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    form.addEventListener("submit", function(event) {
        let valid = true;
        let errorMessage = "";

        // Validate name
        if (nameInput.value.trim() === "") {
            valid = false;
            errorMessage += "Name is required.\n";
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            valid = false;
            errorMessage += "Please enter a valid email address.\n";
        }

        // Validate password
        if (passwordInput.value.length <= 8) {
            valid = false;
            errorMessage += "Password must be at least 8 characters long.\n";
        }

        // Validate password confirmation
        if (passwordInput.value !== confirmPasswordInput.value) {
            valid = false;
            errorMessage += "Passwords do not match.\n";
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission
            alert(errorMessage); // Show error messages
        }else {
            alert("Registration successful!"); // Show success message
            // Optionally, you could also reset the form here
            form.reset();
        }
    });
});
   
