document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.querySelector(".wrapper .form");
    
    if (signInForm) {
        signInForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const emailInput = signInForm.querySelector("input[type='email']");
            const passwordInput = signInForm.querySelector("input[type='password']");
            
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            
            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }
            
            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }
            
            // Simulating a sign-in process (Replace with actual backend API request)
            console.log("Signing in with:", email, password);
            alert("Sign in successful!");
            
            // Redirect user after successful login (Modify as needed)
            window.location.href = "index.html";
        });
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
