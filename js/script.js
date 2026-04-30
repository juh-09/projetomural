async function carregarMensagens() {

    // 1. Busca dados da internet
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");

    // 2. Converte para JSON
    const dados = await resposta.json();

    // 3. Pega a lista do HTML
    const lista = document.getElementById("listaMensagens");

    // 4. Limpa a lista
    lista.innerHTML = "";

    // 5. Mostra só 5 mensagens
    dados.slice(0, 5).forEach(post => {

        const item = document.createElement("li");
        item.textContent = post.title;

        lista.appendChild(item);
    });
}

// Executa ao abrir
carregarMensagens();


// FUNÇÃO 2 → ENVIAR mensagem
async function enviarMensagem() {

    const input = document.getElementById("mensagem");
    const texto = input.value;

    // Validação simples
    if (texto === "") {
        alert("Digite algo!");
        return;
    }

    // Envia para API
    await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: texto
        })
    });

    // Mostra na tela
    const lista = document.getElementById("listaMensagens");

    const item = document.createElement("li");
    item.textContent = texto;

    lista.appendChild(item);

    // Limpa input
    input.value = "";
}