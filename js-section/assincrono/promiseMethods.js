function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("CAI NO ERRO");
        return;
      }

      resolve(msg.toUpperCase() + " - Passei na promise");
      return;
    }, tempo);
  });
}

const promises = [
  "top",
  esperaAi("promise 1", 5000),
  esperaAi("promise 2", 2000),
  esperaAi("promise 3", 3000),
];

// Após resolver todas as promises, retorna o valor
Promise.all(promises)
  .then((valor) => console.log(valor))
  .catch((e) => console.log(e));

// Retorna a promise que for resolvida primeiro
Promise.race(promises)
  .then((valor) => console.log(valor))
  .catch((e) => console.log(e));

function baixaPagina() {
  const emCache = true;

  if (emCache) {
    // Entrega uma promise já resolvida
    // Promise.reject() entregaria uma já rejeitada
    return Promise.resolve("Página em cache");
  } else {
    return esperaAi("Baixei a página", 3000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log("ERRO", e));
