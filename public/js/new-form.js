const newFormHandler = async (event) => {
    event.preventDefault();
    const website = document.querySelector('#website').value;
    const url = document.querySelector('#url').value;
    const user_name = document.querySelector('#username').value;
    const saved_password = document.querySelector('#password').value;

    const response = await fetch(`/passwords`, {
        method: 'POST',
        body: JSON.stringify({
            website,
            url,
            user_name,
            saved_password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
};

document
    .querySelector("#save-password")
    .addEventListener('click', newFormHandler);