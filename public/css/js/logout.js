const logout = async () => {
     // Send a POST request to the '/api/users/logout' endpoint to log the user out 
     // when they click on the logout button
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
          // If the logout request is successful (status code 200), 
          //redirect the user to the login page
      document.location.replace('/login');
    } else {
            // If the logout request fails, display an alert to notify the user
      alert('Failed to log out');
    }
  };

  // Add an event listener to the logout button to handle click events and initiate the logout process
  document.querySelector('#logout').addEventListener('click', logout);
  