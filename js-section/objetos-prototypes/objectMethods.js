const produto = {nome: 'produto', preco: 1.8}
Object.freeze(produto) // congela o objeto. Não poderá ser alterado 
console.log(Object.keys(produto)) // retorna as chaves do objeto

// Método para copiar um objeto
const caneca = Object.assign({}, produto, {material: 'Porcelana'})
console.log(caneca)

// retorna as informações que são atribuidas no defineProporty
Object.getOwnPropertyDescriptor(produto, "nome")

Object.values(caneca) // retorna um array dos valores das propriedades enumeráveis do objeto
Object.entries(caneca) // retorna um array com chave/valor das propriedades enumeráveis do objeto