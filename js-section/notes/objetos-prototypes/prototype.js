// prototype é uma propriedade atrelada a um construtor. 
// Assim, todas as instâncias desse construtor terão acesso ao que há nessa propriedade 

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}
// Criando uma função no prototype do construtor Pessoa
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
}

const pessoa1 = new Pessoa('Carlos', 'André')
const pessoa2 = new Pessoa('Maria', 'Silva')

console.log(pessoa1.nomeCompleto())
// Quando o navegador for buscar algo no objeto pessoa1, ele busca na seguinte cadeia:
// pessoa1 --> Pessoa.prototype --> Object.prototype