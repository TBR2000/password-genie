// const passwordId = document.querySelector('input[name="password_id"]').value;
const editFormHandler = async function (event) {
    event.preventDefault();
    const website = document.querySelector('#website').value;
    const url = document.querySelector('#url').value;
    const user_name = document.querySelector('#username').value;
    const saved_password = document.querySelector('#passwordsave').value;

    const passwordId = document.querySelector('#pwdId').value
    const response = await fetch(`/passwords/${passwordId}`, {
        method: 'PUT',
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
    .addEventListener('click', editFormHandler);
    