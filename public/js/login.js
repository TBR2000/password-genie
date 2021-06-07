const loginFormHandler = async (event) => {
    event.preventDefault();
    const usernameOrEmail = document.querySelector('#loginUserOrEmail').value.trim();
    const password = document.querySelector('#loginPwd').value.trim();

    if (usernameOrEmail && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ usernameOrEmail, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert(response.statusText);
        }
      }
}

const signupFormHandler = async (event) => {
  event.preventDefault();
    const errorSpan = document.querySelector("#error");
    errorSpan.innerHTML = "";

    const username = document.querySelector('#signupUsername').value.trim();
    const email = document.querySelector('#signupEmail').value.trim();
    const password = document.querySelector('#signupPwd').value.trim();
    const confirmPassword = document.querySelector('#signupConfirmPwd').value.trim();

    if(password !== confirmPassword) {
      // const errorSpan = document.querySelector(".error");
      errorSpan.innerHTML = "Please check that your password & confirm password matches";
      return;
    }

    if(password.length < 6) {
      errorSpan.innerHTML = "Password must be 6 characters or more";
      return;
    }

    if(!username || !email || !password) {
      errorSpan.innerHTML = "Please fill in all fields below";
      return;
    }

    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    };
}

document
    .querySelector('.loginForm')
    .addEventListener('submit', loginFormHandler);

    document
    .querySelector('.signupForm')
    .addEventListener('submit', signupFormHandler);