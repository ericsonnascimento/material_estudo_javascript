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

//---------------- DESAFIOS RELACIONADOS A FUNÇÕES -----------------

/*
//5 - Criar uma função que exibe "Olá, mundo!" no console.

function olaMundo() {
    console.log('Olá Mundo!');  
}
*/

/*-------------------------
//6 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function olaMundoNome(nome) {
    console.log(`Olá, ${nome}!`);
}
*/

/*------------------------
//7 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobraNumero(numero) {
    let dobro = numero * 2;
    console.log(`O dobro do número é ${dobro}`);
}
*/

/*-----------------------
//8 - Criar uma função que recebe três números como parâmetros e retorna a média deles.

function calculaMedia(nun1, nun2, nun3) {
    return media = (nun1 + nun2 + nun3) / 3;
}
let resultado = calculaMedia(5, 8, 9);
console.log(`A média dos número é ${resultado}`);
*/

/*------------------------
//9 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function retornaMaior(nun1, nun2) {
    return nun1 > nun2 ? nun1 : nun2;
}
let resultadoDobro = retornaMaior(5, 10)
console.log(resultadoDobro)
*/

/*-------------------------
//10 - Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multiNumero(numero) {
    return multiplicacao = numero * numero;
}
let resultado = multiNumero(5);
console.log(`A multiplicação do número é ${resultado}`);
*/