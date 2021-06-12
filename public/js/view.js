const copyPwdHandler = () => {
    const passwordEl = document.getElementById('passwordEl');
    const el = document.createElement('input');
    el.value = passwordEl.value.trim();
    document.body.appendChild(el);

    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}


const deleteClickHandler = async (e) => {
    e.preventDefault();

    const url = window.location.href;
    const passwordId = url.split('/').pop();
    const response = await fetch(`/passwords/${passwordId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/');
    }
};

document
    .querySelector('#btnCopyPwd')
    .addEventListener('click', copyPwdHandler);

document
    .querySelector('#btnDelete')
    .addEventListener('click', deleteClickHandler);