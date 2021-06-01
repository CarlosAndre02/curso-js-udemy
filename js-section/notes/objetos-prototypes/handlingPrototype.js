function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);
const p2 = {
    nome: 'Caneca',
    preco: 15
};
// Passa um prototype para um objeto específico
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

// Cria um objeto podendo passar um prototype e propriedades específicas
const p3 = Object.create(Produto.prototype, {
preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 99
},
tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42
},
});

p3.aumento(10);
console.log(p3);