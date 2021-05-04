const timerToNumber = (timer) => {
    let [hour, minute, second] = timer.split(':')
    return {
        hour: Number(hour),
        minute: Number(minute),
        second: Number(second)
    }    
}

const runTimer = (timer) => {
    let {hour, minute, second} = timerToNumber(timer.innerText)
    second++
    if (second == 60) {
        second = '00'
        minute++
    } else if (minute == 60) {
        minute = '00'
        hour++
    }
    timer.innerText = `${zeroOnLeft(hour)}:${zeroOnLeft(minute)}:${zeroOnLeft(second)}`
}

function zeroOnLeft (num) {
    return num >= 10 ? num : `0${num}`
}

const timerElement = document.querySelector(".timer")
let timer

document.addEventListener('click', (e) => {
    const el = e.target
    if(el.classList.contains('start')){
        clearInterval(timer)
        timer = setInterval(() => runTimer(timerElement), 80)
    }
    if(el.classList.contains('pause')){
        clearInterval(timer)
    }
    if(el.classList.contains('reset')){
        clearInterval(timer)
        timerElement.innerText = '00:00:00'
    }  
})
