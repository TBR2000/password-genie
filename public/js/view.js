const copyPwdHandler = () => {
    const passwordEl = document.getElementById('passwordEl');
    const el = document.createElement('input');
    el.value = passwordEl.value.trim();
    document.body.appendChild(el);

    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

document
    .querySelector('#btnCopyPwd')
    .addEventListener('click', copyPwdHandler);