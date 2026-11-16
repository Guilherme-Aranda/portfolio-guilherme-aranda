// Verifica se estamos na página de recebimento

const areaDados = document.getElementById("dados-recebidos");

if (areaDados) {

    // Recuperando os parâmetros da URL

    const parametros = new URLSearchParams(window.location.search);

    // Recuperando os valores enviados pelo formulário

    const nome = parametros.get("nome");
    const email = parametros.get("email");
    const assunto = parametros.get("assunto");
    const mensagem = parametros.get("mensagem");

    // Exibindo os dados na página

    document.getElementById("nome").textContent = nome || "Não informado";

    document.getElementById("email").textContent = email || "Não informado";

    document.getElementById("assunto").textContent = assunto || "Não informado";

    document.getElementById("mensagem").textContent = mensagem || "Não informada";

}
