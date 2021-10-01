// Método map itera o array, acessa cada elemento e retorna um elemento novo no lugar
const pessoas = [
    {nome: 'Carlos', idade: 20},
    {nome: 'André', idade: 55},
    {nome: 'João', idade: 37},
    {nome: 'Mariana', idade: 26},
    {nome: 'Igor', idade: 15},
    {nome: 'Julia', idade: 49}
]
  
const nomes = pessoas.map(obj => obj.nome)
const idades = pessoas.map(obj => {
    delete obj.nome
    return obj
})
const comIds = pessoas.map((obj, indice) => {
    const newObj = {...obj}
    newObj.id = indice
    return newObj
})
  
console.log(nomes)
console.log(idades)
console.log(comIds)