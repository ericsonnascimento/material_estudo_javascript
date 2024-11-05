let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número de 1 a 10'

/* ------------------
//1 - Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

function verificarChute() {
    console.log('Botão foi clicado!');
}
*/

/* ------------------
//2 - Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

function alerta() {
    alert('Eu amo JS');
}
*/

/* ------------------
//3 - Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil.
//Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function alerta() {
    let cidade = prompt('Digite o nome de uma cidade no Brasil:');
    alert(`Estive em ${cidade} e lembrei de você`);
}
*/

/* --------------------
//4 - Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function alerta() {
    let numero1 = parseInt(prompt('Digite um número:'));
    let numero2 = parseInt(prompt('Digite outro número:'));
    let soma = numero1 + numero2;
    alert(`A SOMA dos números ${numero1} + ${numero2} é igual a ${soma}`);
}
*/