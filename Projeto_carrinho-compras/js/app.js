let valorGeral;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
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