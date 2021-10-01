// Spread operator sendo usado para fazer uma cópia de nomes em novo.
// Sem o Spread, a atribuição seria por referência, logo o que fosse mudado em novo, seria mudado em nomes
const nomes = ['Eduardo', 'João', 'Maria']
const novo = [...nomes]

novo.pop()
console.log(nomes)
console.log(novo)

// Métodos básicos
const frutas = ['Banana', 'Maçã', 'Mamão', 'Uva']
frutas.shift() // Remove o primeiro elemento do array e retorna ele.
frutas.unshift('Laranja') // Insere um elemento no começo do array
frutas.pop() // Remove o último elemento e retorna ele
frutas.push('Melancia') // Insere um elemento no final do array
frutas.slice(1, 3) // Retorna um pedaço do array. Nesse caso, começando do índice 1 até antes do 3
frutas.indexOf('Mamão') // Retorna o index da primeira ocorrencia desse valor

// String e array
const nome = 'Carlos André Daniel'
const nomes = nome.split(' ') // Separa o que está entre espaços em elementos de um array e retorna ele
const novoNome = nomes.join(' ') // Faz o caminho inverso, juntando os elementos entre espaços