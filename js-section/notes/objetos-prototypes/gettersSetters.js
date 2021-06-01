// Getters e setters são usados para proteger valores do objetos.
// get retorna o valor desejado e set atribui um valor
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    let estoquePrivado = estoque

    Object.defineProperty(this, "Estoque", {
        enumerable: true, 
        get: function() {
            return estoquePrivado
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('Bad value')
                return
            }
            estoquePrivado = valor
        }
    })
}

const p1 = new Produto('camiseta', 20, 3)
p1.estoque = 500
console.log(p1.estoque)