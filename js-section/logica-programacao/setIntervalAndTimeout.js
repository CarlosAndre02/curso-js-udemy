// setInterval executa uma função durante um determinado tempo
// setTimeout executa uma única vez após um determinado tempo
// clearInterval para o setInterval

const mostraHora = () => {
    let data = new Date()
    return data.toLocaleTimeString('pt-BR', { hour12: false})
}

const timer = setInterval(() => {console.log(mostraHora())}, 1000)
setTimeout(() => { console.log('Olá mundo')}, 5000)
setTimeout(() => { clearInterval(timer)}, 10000)
