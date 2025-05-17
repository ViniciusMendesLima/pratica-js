// Básico
// 1. Criando uma matriz
// Crie uma matriz 3x3 preenchida com números de 1 a 9.

// const matriz = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// matriz.forEach((line , index) => {
//     console.log(`Matrix: ${index +1}`);
//     line.forEach(line =>{
//         console.log(line);
        
//     })
    
// })


// 2. Acessando elementos
// Dado o array:

// let matriz = [
//   [10, 20, 30],
//   [40, 50, 60],
//   [70, 80, 90]
// ];

// // Acesse o número 50 e imprima-o no console.
// const number50 = matriz.flat().filter(num => num === 50);
// console.log(number50);

// // Acesse o número 90 e imprima-o no console.
// const number90 = matriz.flat().find(num => num === 90);
// console.log(number90);

// 3. Percorrendo uma matriz
// Use um loop for para percorrer e imprimir todos os elementos da matriz abaixo:
// let matriz = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// for(i = 0; i < matriz.length; i++){
//     for(k = 0; k <matriz[i].length; k++){
//         console.log(matriz[i][k]);
//     }

// }

// 4. Soma dos elementos de uma matriz
// Dada uma matriz 3x3 de números inteiros, crie um código que some todos os valores e exiba o resultado no console.

// let matriz = [
//   [1, 2, 3],
//   [4, 6, 6],
//   [9, 8, 9]
// ];
// let totalnumper = 0;
// matriz.forEach(line => {
//   line.forEach(num =>{
//     totalnumper += num
//   })
// })
// console.log(totalnumper);

// ----- outra forma -----
// let matriz = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// let totalnumper = matriz.reduce((total, num) => {
//   return total + num.reduce((somaLinha , valor) => somaLinha + valor,0);
// },0);
// console.log(totalnumper);

// 5. Maior valor da matriz
// Escreva um programa que encontre e imprima o maior número dentro de uma matriz 3x3.

// let matriz = [
//   [1, 110, 3],
//   [4, 6, 6],
//   [9, 8, 89]
// ];
// let totalnumper = 0;
// matriz.forEach(line => {
//   line.forEach(num =>{
//     if(totalnumper < num) totalnumper = num;
//   })
// })
// console.log(totalnumper);

// 6. Multiplicação por um escalar
// Peça ao usuário um número e multiplique todos os elementos da matriz por esse número.

// let matriz = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// let usernumber = parseFloat(prompt('Digite um número para multiplicar os elementos da matriz'));
// matriz.forEach(line => {
//   line.forEach(num =>{
//     let multnumber = usernumber * num;
//     console.log(`O valor ${usernumber} * ${num} e: ${multnumber}`);
    
//   })
// })

// ----- outra forma -----

// let matrizMultiplicar = matriz.map(linha =>
//   linha.map(valor => valor * usernumber)
// )

// console.log("Matriz após multiplicação por", usernumber, ":");
// console.table(matrizMultiplicar);

// 7. Transposição de matriz
// Escreva uma função que receba uma matriz 3x3 e retorne sua transposta (troca de linhas por colunas).

// const matrizOriginal = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const matrizTrasposta = transpostaMatriz(matrizOriginal)

// function transpostaMatriz(matriz){
//   let transposta = []
//   for (let c = 0; c < matriz[0].length; c++) {
//     transposta[c]=  [];
//     for (let l = 0; l < matriz.length; l++) {
//       transposta[c][l] = matriz[l][c];
//     }
//   }
//   return transposta;
// }

// console.table(matrizOriginal);

// console.table(matrizTrasposta)



