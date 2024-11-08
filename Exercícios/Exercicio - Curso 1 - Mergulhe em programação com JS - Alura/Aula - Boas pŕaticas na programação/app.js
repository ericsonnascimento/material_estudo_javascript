/*
//1 - Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log('Boas-vindas');
*/


/*
//2 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem
//"Olá, [seu nome]!" no console do navegador.

let nome = 'Ericson Nascimento'

console.log(`Olá, ${nome}!`)
*/

/*
//3 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

let nome = 'Ericson Nascimento'

alert(`Olá, ${nome}!`)
*/

/*
//4 - Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, 
//armazene a resposta em uma variável e mostre no console do navegador.


let pergunta = prompt('Qual a linguagem de programação que você mais gosta?');

console.log(pergunta);
*/

/*
//5 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
//Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado".
//Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = 5;
let valor2 = 13;

let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)
*/

/*
//6 - Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa 
//é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let idade = prompt('Insira a sua idade:')

if (idade >= 18) {
    console.log('Pessoa MAIOR de 18 anos!')
} else {
    console.log('Pessoa MENOR de 18 anos!')
}
*/

/*
//7 - Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = prompt('Insira um número:')

if (numero > 0) {
    alert('O número digitado é POSITIVO')
} if (numero < 0) {
    alert('O número digitado é NEGATIVO')
} else {
    alert('O número digitado é ZERO')
}
*/

/*
//8 - Use um loop while para imprimir os números de 1 a 10 no console.

let numero = 1;

while (numero <= 10) {
    console.log(numero);
    numero++
}
*/

/*
//10 - Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba 
//"Aprovado" ou "Reprovado" no console.

let nota = prompt('Digite a nota:');

let resultado = nota >= 7 ? 'APROVADO' : 'REPROVADO';
alert(`O resultador da sua avaliação é ${nota}, está ${resultado}`);
*/

/*
//11 - Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);
*/

/*
//12 - Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let numeroAleatorio = parseInt(Math.random()*10+1)
console.log(numeroAleatorio)
*/