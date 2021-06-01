// defineProperty e defineProperties são usados para definir propriedades para um objeto
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, "Estoque", {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode ser alterado
        configurable: true // pode ser configurado ou deletado
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome, 
            writable: true, 
            configurable: true
        }, 
        preco: {
            enumerable: true, 
            value: preco, 
            writable: true, 
            configurable: true
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(Object.keys(p1))
