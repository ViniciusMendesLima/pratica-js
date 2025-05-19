// 4. Soma dos elementos de uma matriz
// Dada uma matriz 3x3 de números inteiros, crie um código que some todos os valores e exiba o resultado no console.

// let matriz = [
//   [10, 20, 30],
//   [40, 50, 60],
//   [70, 80, 90]
// ];
// // let total=0;
// // for(let i =0; i < matriz.length; i++){
// //     for (let c = 0; c < matriz[i].length; c++) {
// //         total += matriz[i][c];
// //     }
// // }
// let todosOsNumeros = matriz.flat();
// const total =todosOsNumeros.reduce((acc, num) => acc + num, 0)
// console.log(total);
// --- outro modo


// 5. Maior valor da matriz
// Escreva um programa que encontre e imprima o maior número dentro de uma matriz 3x3.

// let matriz = [
//   [10, 20, 30],
//   [40, 550, 60],
//   [70, 80, 90]
// ];
// // let maior = 0
// // for (let i = 0; i < matriz.length; i++) {
// //     for (let c = 0; c < matriz[i].length; c++) {
// //         if(matriz[i][c] > maior) maior = matriz[i][c];
// //     }
// // }
// // console.log(maior);

// // --- outro modo

// let todosOsNumeros = matriz.flat();
// let maior = todosOsNumeros.reduce((a, b) => a > b ? a : b);

// console.log(maior);

// 6. Multiplicação por um escalar
// Peça ao usuário um número e multiplique todos os elementos da matriz por esse número.

// let matriz = [
//   [10, 20, 30],
//   [40, 50, 60],
//   [70, 80, 90]
// ];
// console.table(matriz)
// let userNumber = parseFloat(prompt());
// let matrizMultiplicada = matriz.map(line => line.map(num => num * userNumber));


// console.table(matrizMultiplicada)


// 7. Transposição de matriz
// Escreva uma função que receba uma matriz 3x3 e retorne sua transposta (troca de linhas por colunas).
let matriz = [
  [1, 2, 3],   
  [4, 5, 6],  
  [7, 8, 9]
];
console.table(matriz)

function trasnporMatriz(matriz){
    return matriz[0].map((_, colIndex) => {
        console.log(matriz[colIndex]);
        return matriz.map(line => line[colIndex]);
    })
}

let matrizNova = trasnporMatriz(matriz)
console.table(matrizNova)
