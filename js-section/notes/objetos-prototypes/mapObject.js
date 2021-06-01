const pessoas = [
    {id: 1, nome: 'Carlos'},
    {id: 3, nome: 'André'},
    {id: 2, nome: 'João'}
]

const novasPessoas = new Map()
for (const pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas.set(id, {...pessoa})
}

console.log(novasPessoas.get(2))