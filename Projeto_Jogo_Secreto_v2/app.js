
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//Função para a TAG e o Parágrafo, utilizando os princípios DRY (Dont Reapeat Youself)
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//Função para centralizar a inserção de dados em um único local, já que iremos inserir dados em vários locais
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10'); 
}

//Temos que chamar a função para que ela seja exibida na tela
exibirMensagemInicial();

//Função relacionada ao button "Chutar"
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você Acertou!');

        //Utilizando operador ternário, se a tentativa for maior que um usar no plural se não no singular
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);

        //Pegando o button "Novo Jogo" atravé do ID, habilitando o botão ao acertar o número secreto removendo o "atributo disabled"
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é MENOR');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é MAIOR');
        }
        tentativas++;
        limparCampo();
    }
}

//Função para gerar números aleatório de 1 a 10 mudando de float para inteiro que salva os números em uma lista para que não se repitam
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

//Função de limpeza do campo após tentativa, utilizando a string vazia ''
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//Função relacionada ao button "Novo jogo"
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}