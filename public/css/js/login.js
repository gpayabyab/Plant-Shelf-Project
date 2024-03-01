const loginFormHandler = async (event) => {
    // Prevent the default form submission behavior to handle it with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send the user email and password to the server for authentication
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
              // If login is successful (HTTP status code 200), redirect the user to the homepage
        document.location.replace('/');
      } else {
              // If login fails, display an alert to the user
        alert('Failed to log in');
      }
    }
  };
  
  // Add an event listener to the login form to handle form submission
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  