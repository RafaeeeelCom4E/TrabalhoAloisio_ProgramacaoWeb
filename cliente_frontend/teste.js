async function carregarProdutos() {
    try {
        const response = await fetch('http://localhost:3000/produtos');
        const produtos = await response.json();

        const container = document.getElementById('lista-produtos');
        container.innerHTML = ''; // Limpa o "Carregando..."

        produtos.forEach(p => {
            container.innerHTML += `
                <div class="produto-card">
                    <img src="${p.imagem_url}" alt="${p.nome}">
                    <h3>${p.nome}</h3>
                    <p>R$ ${p.preco}</p>
                    <button class="btn-comprar">Comprar</button>
                </div>
            `;
        });
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        document.getElementById('lista-produtos').innerHTML = "Erro ao carregar produtos. O servidor está ligado?";
    }
}

carregarProdutos();