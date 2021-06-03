class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Método de instância
  aumentarVolume() {
    this.volume += 2;
  }
  diminuirVolume() {
    this.volume -= 2;
  }

  // Método estático - Não depende de instância para ser utilizado. O this é a própria classe.
  static soma(x, y) {
    console.log(this);
  }
}

const controle1 = new ControleRemoto("LG");
ControleRemoto.soma();
