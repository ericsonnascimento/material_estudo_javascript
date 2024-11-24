let valorGeral;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }


    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let nomeProduto = produto.split('-')[0];
    let valorProduto = parseFloat(produto.split('R$')[1]);
    
    let preco = valorProduto * quantidade;
    
   
   let carrinho = document.getElementById('lista-produtos');
   carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
        </section>`

    valorGeral = valorGeral + preco;
         
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${valorGeral}`

    document.getElementById('quantidade').value = 0;
}


function limpar() {
    valorGeral = 0;
    document.getElementById('valor-total').textContent = 'R$ ' + 0;
    document.getElementById('lista-produtos').innerHTML = '';
}