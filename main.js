const form = document.getElementById("form-contato");
const contatos = [];
const telefones = [];

let linhas = "";

form.addEventListener("submit", function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById("nome");
    const inputSobrenome = document.getElementById("sobrenome");
    const inputTelefone = document.getElementById("telefone");

    if (!inputNome.value.trim() || !inputSobrenome.value.trim()) {
        alert("Por favor, preencha os campos de nome e sobrenome.");
        return;
    }

    const nomeCompleto = `${inputNome.value} ${inputSobrenome.value}`;
    if (contatos.includes(nomeCompleto)) {
        alert(`O contato ${nomeCompleto} já foi inserido.`);
    } else if (telefones.includes(parseFloat(inputTelefone.value))) {
        alert(`O contato com telefone ${inputTelefone.value} já foi inserido.`);
    } else {
        contatos.push(nomeCompleto);
        telefones.push(parseFloat(inputTelefone.value));

        let linha = "<tr>";
        linha += `<td>${nomeCompleto}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += "</tr>";

        linhas += linha;
    }

    inputNome.value = "";
    inputSobrenome.value = "";
    inputTelefone.value = "";
}


function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}
