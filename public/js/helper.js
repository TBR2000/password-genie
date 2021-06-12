const copyPwdHandler = () => {
    alert("HERE");
    const passwordEl = document.getElementById('password');
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
