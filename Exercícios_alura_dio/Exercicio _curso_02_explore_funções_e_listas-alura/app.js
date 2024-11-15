/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número de 1 a 10'
*/

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

/*---------------------------
//11 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas,
// que serão recebidos como parâmetro.

function calculoIMC(altura, peso) {
    let imc = (altura * altura) / peso;
    return imc
}
*/

/*-----------------------------
//12 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso,
//considere a cotação do dólar igual a R$4,80.

function converterDolarEmReal(valorDolar) {
    let dolarDia = 4.80;
    let cauculo = valorDolar * dolarDia;
    return cauculo;
}
*/

/*-------------------------
//13 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, 
//utilizando altura e largura que serão dadas como parâmetro.

function areaPerimetroQuadrado(largura, altura) {
    area = largura * altura;
    perimetro = (altura + largura) * 2;
    console.log(`A área da sala é de ${area}m² e o perímetro é de ${perimetro}m`);
}
*/

/*----------------------
//14 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, 
//utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function areaPerimetroCirculo(raio) {
    area = (raio ** 2) * Math.PI;
    perimetro = 2 * Math.PI * raio;
    console.log(`A área do circulo é de ${area.toFixed(2)}m² e o perímetro é de ${perimetro.toFixed(2)}m`); 
}
*/

/*
//15 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
}
*/

/*
//16 - Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 
//'JavaScript','C','C++', 'Kotlin' e 'Python'.
//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
//Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python']
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang')

console.log(linguagensDeProgramacao[0])
console.log(linguagensDeProgramacao[linguagensDeProgramacao.length - 1])
*/
