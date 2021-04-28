// const data = new Date(2019, 3, 20, 5, 8, 9) // a, m, d, h, M, s, ms
// const data = new Date("2019-04-20 20:15:59")

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1)
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)