function Pessoa(nome, sobrenome) {
    // Atríbutos ou métodos privados
    const ID = 12345
    const metodoInterno = function() {}

    // Atríbutos ou métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function() {
        console.log(this.nome + ': sou um método')
    }
}

const p1 = new Pessoa('Luiz', 'Otávio')
const p2 = new Pessoa('Maria', 'Oliveira')
p2.metodo()
