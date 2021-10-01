// Método filter itera o array e se a proposição for true, o elemento é retornado
const pessoas = [
    {nome: 'Carlos', idade: 20},
    {nome: 'André', idade: 55},
    {nome: 'João', idade: 37},
    {nome: 'Mariana', idade: 26},
    {nome: 'Igor', idade: 15},
    {nome: 'Julia', idade: 49}
]
  
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50)
const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a')
})
  
console.log(pessoasComNomeGrande)
console.log(pessoasComMaisDeCinquentaAnos)
console.log(nomeTerminaComA)