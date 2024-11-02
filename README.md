# Plano de Estudo Javascript

## Fundamentos JavaScript

- Sintaxe e Operadores
    - Operadores Lógicos e Matemáticos
        - Operadores de comparação
            
            
            | Operador | Nome | Exemplo | Resultado |
            | --- | --- | --- | --- |
            | == | Igual | A==B | Verdadeiro se A **for igual** a B |
            | != | Diferente | A!=B | Verdadeiro se A **não for igual** a B |
            | < | Menor que | A<B | Verdadeiro se A **for menor que** B |
            | > | Maior que | A>B | Verdadeiro se A **for maior que** B |
            | <= | Menor ou igual | A<=B | Verdadeiro se A **for menor ou igual** a B. |
            | >= | Maior ou igual | A>=B | Verdadeiro se A **for maior ou igual** a B. |
        - Operadores Lógicos
            
            
            | Operador | Nome | Exemplo | Resultado |
            | --- | --- | --- | --- |
            | && | E/AND | (A>B)&&(B==C) | Verdadeiro se A fo maior que B ***E*** B for igual a C |
            | || | OU/OR | (A>B)||(B==C) | Verdadeiro se A for maior que B ***OU*** B for igual a C |
            | ! | NEGAÇÃO | !(A==B) | Verdadeiro se A ***NÃO*** for igual a B |
        - Operadores Matemáticos
            
            Se resumem a:
            
            +, -, =, /, * 
            
    - Variáveis e Constantes
    - Estrutura de Dados
    - Tipos de Dados
        1. **String**
            - Representa texto
            - Exemplo: `"Hello, World!"`,`'JavaScript'`
        2. **Number**
            - Representa números, tanto inteiros quanto de ponto flutuante
            - Exemplo: `42`, `3.14`, `1`
        3. **Boolean**
            - Representa valores lógicos: `true` o`false`.
            - Exemplo: `true`,`false`
        4. **Undefined**
            - Indica que uma variável foi declarada, mas não recebeu um valor.
            - Exemplo: `let x; // x é undefined`
        5. **Null**
            - Representa a ausência intencional
            - Exemplo: `let y = null;`
        6. **Symbol** (ES6)
            - Representa um valor único e imutável, geralmente usado como identificador para propriedades
            - Exemplo: `let sym = Symbol('descricao');`
        7. **BigInt** (ES2020)
            - Permite representar números inteiros maiores que `2^53 - 1`, qu`Number`.
            - Exemplo: `let big = 123456789012345678901234567890n;`
        8. **Object**
            - Tipo complexo que permite armazenar coleções de dados e entidades mais complexas. Objetos podem ter propriedades e métodos.
            - Exemplo:
                
                ```jsx
                
                let pessoa = {
                  nome: "Ana",
                  idade: 25,
                  saudacao: function() { console.log("Olá!"); }
                };
                
                ```
                
        9. **Array**
            - Um tipo de objeto especializado para armazenar listas ordenadas de valores.
            - Exemplo: `[1, 2, 3]`, `["maç`["maçã", "banana", "laranja"]`
        10. **Function**
            - Também é um tipo de objeto, mas especificamente projetado para executar um bloco de código.
            - Exemplo:
                
                ```jsx
                javascript
                Copy code
                function somar(a, b) {
                  return a + b;
                }
                
                ```
                
    - Condicionais (if e else)
        - if/else
    - Laços de Repetição (for e while)
        - For
        - While
            
            Utilizamos o loop "while" para repetir um bloco de código enquanto uma determinada condição.
            
            Exemplo: O laço continuará até que seja digitado o número 10 na entrada.
            
            ```jsx
            while (true) {
                entrada = prompt('Digite um número de 1 a 10:');
                if (entrada == 10) {
                    alert('Você acertou!');
                    break;
                }
            }
            ```
            

## Intermediário Javascript

- DOM - Document Object Model
    - Seletores
    - Manipular o CSS
    - Eventos
- Manipulação de Arrays
    - map
    - filter
    - reduce
    - sort
- Funções
    - Clean Code
    - Funções Anônimas

### Projetos para praticar:

1. Criar uma Calculadora (Matheus Battisti - Gora de Codar)
2. To-Do Lists “Lista de Tarefas” (Will Dev)

## Avançado Javascript

- Programação Assíncrona
    - fetch
    - promises
    - async
    - await
    - setInterval
    - setTimeout
- Biblioteca
    - React
- Framework
    - Vue.js
    - Angula