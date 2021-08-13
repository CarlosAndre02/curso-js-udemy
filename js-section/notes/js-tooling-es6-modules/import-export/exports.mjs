// export simples. Ao ser importado, é necessário usar chaves e o nome do q tá sendo exportado
export const nome = "Joãozinho";
export const sobrenome = "Oliveira";
export const idade = 30;

export function soma(x, y) {
  return x + y;
}

// export com default, ao ser importado, pode usar qualquer nome e sem chaves
export default class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
