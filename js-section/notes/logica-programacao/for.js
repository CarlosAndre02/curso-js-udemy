// For in - lê os indices ou chaves do objeto
const pessoa = {
    nome: 'João',
    sobrenome: 'Carlos',
    idade: 22
}
for (let chave in pessoa) {
    console.log(pessoa[chave])
}

const frutas = ['Banana', 'Maçã', 'Pera', 'Uva']
for (let index in frutas) {
    console.log(frutas[index])
}

// For of - retorna o valor. Usado em iteráveis
const nomes = ["Carlos", "André", "Pedro", "João"]
for (let valor of nomes) {
    console.log(valor)
}