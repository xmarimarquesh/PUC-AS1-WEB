function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name === '' || email === '') {
        alert('Todos os campos são obrigatórios!');
        return false;
    }
    return true;
}

// Função para exibir os dados enviados na formAction.html
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const email = params.get('email');
    if (name && email) {
        document.getElementById('result').innerText = `Nome: ${name}, E-mail: ${email}`;
    } else {
        document.getElementById('result').innerText = 'Nenhum dado recebido.';
    }
}
