const nomes = ['Maria', 'João', 'Carlos', 'Eduardo']

// Splice permite remover elementos, retornar eles e adicionar outros elementos no lugar
// É possível simular o comportamento dos métodos shift, unshift, pop e push
// nomes.splice(indice, delete, addElemento1, addElemento2, addElemento3)
const removidos = nomes.splice(2, 1, 'André')
console.log(nomes)
console.log(removidos)