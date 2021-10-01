// classe
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  // Métodos em classes automaticamente já irão pro prototype da classe
  falar() {
    console.log(`${this.nome} está falando.`);
  }
}

// Função construtora
function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando.`);
};

const p1 = new Pessoa("Luiz", "Miranda");
const p2 = new Pessoa2("Luiz", "Miranda");
