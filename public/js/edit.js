const passwordId = document.querySelector('input[name="password_id"]').value;
const editFormHandler = async function (event) {
    event.preventDefault();
    const website = document.querySelector('input[name="website"]').value;
    const url = document.querySelector('input[name="url"]').value;
    const username = document.querySelector('input[name="user_name"]').value;
    const password = document.querySelector('input[name="password"]').value;

    await fetch(`/api/passwords/${passwordId}`, {
        method: 'PUT',
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
    .querySelector("#save-password")
    .addEventListener('submit', editFormHandler);
document
    .querySelector("#delete-btn")
    .addEventListener('click', deleteClickHandler);
document
    .querySelector("#cancel-btn")
    .addEventListener('click', cancelClickHandler);