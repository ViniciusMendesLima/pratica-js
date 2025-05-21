// 8. Multiplicação de Matrizes
// Implemente a multiplicação entre duas matrizes 3x3.
let matriz1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let matriz2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
//----------------- primeiro modo-----
// function matrizMultiplicada(matriz1, matriz2) {
//   const soma = [];
//   for (let i = 0; i < 3; i++) {
//     soma[i]=[]
//     for (let j = 0; j < 3; j++) {
//       soma[i][j] = matriz1[i][j]*matriz2[i][j]
//     }
//   }
//   return soma;
// }
// const resultado = matrizMultiplicada(matriz1,matriz2)
// console.table(resultado)

//----- segundo modo----
function matrizMultiplicada(m1, m2 , operacao){
  return m1.map((line, i) =>
    line.map((value, j) => operacao(value, m2[i][j]))
  );
}

const resultado = matrizMultiplicada(matriz1, matriz2, (a,b) => a*b)
console.table(resultado)


// 9. Matriz Identidade
// Crie uma função que gere uma matriz identidade de tamanho n x n.
//----------------- primeiro modo-----
// const tamanho = 3;
// function matrizIdentidade(tamanho) {
//   const matriz = [];
//   for (let i = 0; i < tamanho; i++) {
//     matriz[i]=[]
//     for (let j = 0; j < tamanho; j++) {
//       if (i === j) {
//         matriz[i][j] = 1;
//       }else{
//         matriz[i][j] = 0
//       }
//     }
//   }
//   return matriz;
// }
// const resultado = matrizIdentidade(tamanho)
// console.table(resultado)
//----- segundo modo----
// const tamanho = 5;
// function matrizIdentidade(tamanho) {
//   return Array.from({length:tamanho}, (_, i) =>
//     Array.from({ length: tamanho}, (_, j) => i === j ? 1 : 0))
// }
// const resultado = matrizIdentidade(tamanho)
// console.table(resultado)


// 10. Rotação de uma matriz (90°)
// Escreva uma função que gire uma matriz 3x3 em 90° no sentido horário.
//----------------- primeiro modo-----
// function rotacionarMatriz90(matriz) {
//   const tamanho = matriz.length;
//   const rotacionada = [];

//   for (let i = 0; i < tamanho; i++) {
//     rotacionada[i] = [];
//     for (let j = 0; j < tamanho; j++) {
//       rotacionada[i][j] = matriz[tamanho - j - 1][i];
//     }
//   }

//   return rotacionada;
// }

// let matriz = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// const resultado = rotacionarMatriz90(matriz);
// console.table(resultado);

//----- segundo modo----

// function rotacionarMatriz90(matriz) {
//   return matriz[0].map((_, colIndex) =>
//     matriz.map(row => row[colIndex]).reverse()
//   );
// }

// let matriz = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// const resultado = rotacionarMatriz90(matriz);
// console.table(resultado);
// 11. Busca de um valor específico
// Escreva uma função que verifique se um número existe na matriz e retorne sua posição [linha, coluna].

// let matriz = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
//  const numero = 9;
 // ---  modo 1
// function matrizPosicao(matriz, numero){
// for (let i = 0; i < matriz.length; i++) {
//   for (let j = 0; j < matriz[i].length; j++) {
//     if (matriz[i][j] === numero) {
//       return [i, j];
//     }
//   }
// }
// }


  // ---  modo 2
// function matrizPosicao(matriz, numero) {
//   let resultado = null;

//   matriz.forEach((linha, i) => {
//     linha.forEach((valor, j) => {
//       if (valor === numero) {
//         resultado = [i, j];
//       }
//     });
//   });
  
//   return resultado;
// }
//******************* */
// const posicao = matrizPosicao(matriz , numero);
// posicao
//   ? console.log(`Número ${numero} encontrado na posição [${posicao[0]}, ${posicao[1]}]`)
//   : console.log(`Número ${numero} não está na matriz`);


// 12. Soma das diagonais
// Para uma matriz quadrada n x n, some e imprima os valores da diagonal principal e da diagonal secundária.

// let matriz = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
 // ---  modo 1
// function matrizPrinESecn(matriz){
//   let matPrins = 0, matSecun = 0;
//   for (let i = 0; i < matriz.length; i++) {
//     matPrins += matriz[i][i];
//     matSecun += matriz[i][matriz.length - 1 - i];
//   }

//   return [matPrins, matSecun];
// }


 // ---  modo 2 
// function matrizPrinESecn(matriz){
//   const matPrins = matriz.reduce((soma, linha, i) => soma + linha[i], 0);
//   const matSecun = matriz.reduce((soma, linha, i) => soma + linha[matriz.length - 1 - i], 0);

//   return [matPrins, matSecun];
// }
// //----------------------------------------

// const somas = matrizPrinESecn(matriz)

// console.log(`Soma da diagona primaria e ${somas[0]}`);
// console.log(`Soma da diagona secundaria e ${somas[1]}`);
