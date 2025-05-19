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





