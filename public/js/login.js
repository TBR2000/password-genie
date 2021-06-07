const loginFormHandler = async (event) => {
    event.preventDefault();
    const usernameOrEmail = document.querySelector('#loginUserOrEmail').value.trim();
    const password = document.querySelector('#loginPwd').value.trim();

    console.log(usernameOrEmail);
    console.log(password);

    if (usernameOrEmail && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ usernameOrEmail, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          // If successful, redirect the browser to the profile page
          document.location.replace('/');
        } else {
          alert(response.statusText);
        }
      }

}

document
    .querySelector('.loginForm')
    .addEventListener('submit', loginFormHandler);