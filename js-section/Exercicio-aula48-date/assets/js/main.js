/*
Outra (e melhor) forma de fazer:

const dateElement = document.querySelector(".date")
const data = new Date()
dateElement.innerText = data.toLocaleDateString('pt-BR', { dataStyle: 'full', timeStyle: 'short'}) 

*/

const dateElement = document.querySelector(".date")
dateElement.innerText = currentDate()

function currentDate () {
    const date = new Date()
    const weekday = defineWeekDay(date)
    const currentDate = defineDate(date)
    const currentTime = defineTime(date)
    return `${weekday}, ${currentDate} ${currentTime}`
}

function defineWeekDay (date) {
    const weekday = date.getDay()
    let day

    /* Outra (e melhor) forma: 
        const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
        return diasSemana[weekday]
    */
    switch (weekday) {
        case 0:
            day = 'Domingo'
            return day
        case 1:
            day = 'Segunda-feira'
            return day
        case 2:
            day = 'Terça-feira'
            return day
        case 3:
            day = 'Quarta-feira'
            return day
        case 4:
            day = 'Quinta-feira'
            return day
        case 5:
            day = 'Sexta-feira'
            return day
        case 6:
            day = 'Sábado'
            return day
        default:
            day = ''
            return day
    }
}

function defineDate (date) {
    const day = date.getDate()
    const year = date.getFullYear()
    const month = date.getMonth()
    let monthText
    switch (month) {
        case 0:
            monthText = 'Janeiro'
            break
        case 1:
            monthText = 'Fevereiro'
            break
        case 2:
            monthText = 'Março'
            break
        case 3:
            monthText = 'Abril'
            break
        case 4:
            monthText = 'Maio'
            break
        case 5:
            monthText = 'Junho'
            break
        case 6:
            monthText = 'Julho'
            break
        case 7:
            monthText = 'Agosto'
            break
        case 8:
            monthText = 'Setembro'
            break
        case 9:
            monthText = 'Outubro'
            break
        case 10:
            monthText = 'Novembro'
            break
        case 11:
            monthText = 'Dezembro'
            break
        default:
            monthText = ''
            break
    }
    return `${day} de ${monthText} de ${year}`
}

function defineTime (date) {
    const hour = zeroOnLeft(date.getHours())
    const minute = zeroOnLeft(date.getMinutes())
    return `${hour}:${minute}`
}

function zeroOnLeft (num) {
    return num >= 10 ? num : `0${num}`
}