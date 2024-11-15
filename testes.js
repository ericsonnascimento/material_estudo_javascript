var frutas = ['Laranja', 'Uva', 'Pera']; //frutas é um array de 3 elementos, 0, 1, 2
      
/*Imprimindo na caixa de diálogo o conteúdo do array 'frutas' utilizando o laço 'for'*/
for(var i = 0; i < frutas.length; i++){ // length (tamanho do array, frutas tem 3 arrays)
    console.log('Nome da Fruta contida no Array: ' + frutas[i]);
}
            
/*Imprimindo na caixa de diálogo o conteúdo do array 'frutas' utilizando o laço 'for/in'*/
for(var fruta in frutas){
    console.log('Nome da Fruta contida no Array: ' + frutas[fruta]);
}