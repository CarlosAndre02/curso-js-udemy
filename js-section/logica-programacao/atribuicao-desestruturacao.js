// Arrays
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
const [um, , tres, , cinco, ...resto] = numeros
console.log(um, tres, cinco)
console.log(resto)

// Objetos
const pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: '25',
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}

const { nome, sobrenome = '', idade: i, ...resto } = pessoa
console.log(nome, sobrenome, i)
console.log(resto)