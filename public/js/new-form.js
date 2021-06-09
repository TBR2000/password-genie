const newFormHandler = async function (event) {
    event.preventDefault();
    const website = document.querySelector('input[name="website"]').value;
    const url = document.querySelector('input[name="url"]').value;
    const username = document.querySelector('input[name="user_name"]').value;
    const password = document.querySelector('input[name="password"]').value;

    await fetch(`/api/new`, {
        method: 'POST',
        body: JSON.stringify({
            website,
            url,
            username,
            password
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

const deleteClickHandler = async function () {
    await fetch(`/api/passwords/${passwordId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
};

const cancelClickHandler = async function () {
    document.location.replace('/');
};

document
    .querySelector("#new-entry-form")
    .addEventListener('submit', newFormHandler);
document
    .querySelector("#cancel-btn")
    .addEventListener('click', cancelClickHandler);