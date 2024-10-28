document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation for demonstration purposes
    if (username === 'admin' && password === 'password') {
        document.getElementById('message').textContent = 'Login successful!';
        // Redirect to home page or perform further actions
        // window.location.href = 'index.html';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password.';
    }
});
