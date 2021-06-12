const copyPwdHandler = () => {
    const passwordEl = document.getElementById('password');
    const el = document.createElement('input');
    el.value = passwordEl.value.trim();
    document.body.appendChild(el);

    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

const backHandler = (e) => {
    e.preventDefault();
    document.location.replace('/');
}

document
    .querySelector('#btnCopyPwd')
    .addEventListener('click', copyPwdHandler);

document
    .querySelector('#btnBack')
    .addEventListener('click', backHandler);
