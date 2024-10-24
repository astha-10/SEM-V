// JavaScript code for form validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
  
    // Getting values from the form fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
  
    // Specific validation criteria
    if (username === 'admin' && password === '1234') {
      // If validation succeeds, display a success message
      alert('Login successful!');
      errorMessage.textContent = ''; // Clear any error message
    } else {
      // If validation fails, show an error message
      errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
  });
  