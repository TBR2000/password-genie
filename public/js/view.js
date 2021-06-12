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
    .querySelector('#btnDelete')
    .addEventListener('click', deleteClickHandler);