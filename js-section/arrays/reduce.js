// Reduce é usado para reduzir o array a um valor

// Somar todos os valores
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce((acumulador, valor) => {
    acumulador += valor
    return acumulador
}, 0)
console.log(total)

// retornar a pessoa mais velha
const Pessoas = [
    { nome: 'Luiz', idade: 50 },
    { nome: 'Carlos', idade: 15 },
    { nome: 'João', idade: 68 },
    { nome: 'Igor', idade: 31 },
    { nome: 'Fábio', idade: 51 },
    { nome: 'Leo', idade: 22 },
    { nome: 'André', idade: 19 }
]

const maisVelha = Pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(maisVelha)
