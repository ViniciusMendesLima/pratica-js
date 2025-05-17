const sports = [
    ['soccer', 'basketball'], // esportes coletivos
    ['athletics', 'gymnastics'], // esportes infividuais
    ['cycling', 'motocross'] // esportes de velocidade
]

// metodo forEach()

// sports.forEach((category, indexCategory)=>{
//     console.log(`Categoria ${indexCategory + 1}`);
//     category.forEach((sport) => {
//         console.log(sport);
        
//     })
// })

// const sportsWithCategory = sports.map((category, indexCategory) => {
//     return indexCategory === 1 ? category : null;
// }).filter(category => category !== null)

// console.log(sportsWithCategory);

const sportsWithCategory = sports.filter((_, index) => index + 1 === 1)

const totalSports = sports.flat().reduce((acc, sport) => acc +1, 0);
console.log(totalSports);


for (let i = 0; i < sports.length; i++) {
    for (let k = 0; k < sports[i].length; k++) {
        console.log(`Elemento na posição [${i}][${k}]: ${sports[i][k]}`);
        
    }
}



