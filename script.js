document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    let valid = true;

    if (nome === "") {
        document.getElementById('nomeError').textContent = "Nome é obrigatório.";
        valid = false;
    } else {
        document.getElementById('nomeError').textContent = "";
    }

    if (telefone === "") {
        document.getElementById('telefoneError').textContent = "Telefone é obrigatório.";
        valid = false;
    } else {
        document.getElementById('telefoneError').textContent = "";
    }

    if (valid) {
        const tabela = document.getElementById('contatos').getElementsByTagName('tbody')[0];
        const novaLinha = tabela.insertRow();

        const celulaNome = novaLinha.insertCell(0);
        const celulaTelefone = novaLinha.insertCell(1);

        celulaNome.textContent = nome;
        celulaTelefone.textContent = telefone;

        document.getElementById('formContato').reset();
    }
});
