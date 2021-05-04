const weight = document.querySelector('.weight')
const height = document.querySelector('.height')
const calculateBtn = document.querySelector('.calculate')
const answer = document.querySelector('.answer')

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault()
    updateAnswer()
})

const calculateIMC = () => {
    const weightValue = parseFloat(weight.value)
    const heightValue = parseFloat(height.value)
    const imc = weightValue / (heightValue ** 2)
    return imc
}

const updateAnswer = () => {
    const imc = calculateIMC()
    answer.classList.add("active")
    
    if (isNaN(imc)) 
        answerMessage("Valor inválido", "red")
    else if (imc > 40) 
        answerMessage("Obesidade grau 3", "red")
    else if (imc >= 35 && imc <= 39.5)
        answerMessage("Obesidade grau 2", "red")
    else if (imc >= 30 && imc <= 34.9)
        answerMessage("Obesidade grau 1", "red")
    else if (imc >= 25 && imc <= 29.9)
        answerMessage("Sobrepeso", "red")
    else if (imc >= 18,5 && imc <= 24.9)
        answerMessage("Peso Normal", "green")
    else 
        answerMessage("Abaixo do peso", "red")
}

const answerMessage = (message, color) => {
    answer.innerHTML = `${message}`
    answer.style.backgroundColor = `${color}`
}
