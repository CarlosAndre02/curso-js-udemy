const weight = document.querySelector('.weight')
const height = document.querySelector('.height')
const calculateBtn = document.querySelector('.calculate')
const answer = document.querySelector('.answer')

const calculateIMC = () => {
    const weightValue = Number(weight.value)
    const heightValue = Number(height.value)
    const imc = weightValue / (heightValue ** 2)
    return imc
}

const updateAnswer = () => {
    const imc = calculateIMC()
    answer.classList.add("active")
    
    if (isNaN(imc)) {
        answer.innerHTML = "Valor inválido"
        answer.style.backgroundColor = "red"
    } else if (imc > 40) {
        answer.innerHTML = "Obesidade grau 3"
        answer.style.backgroundColor = "red"
    } else if (imc >= 35 && imc <= 39.5){
        answer.innerHTML = "Obesidade grau 2"
        answer.style.backgroundColor = "red"
    } else if (imc >= 30 && imc <= 34.9){
        answer.innerHTML = "Obesidade grau 1"
        answer.style.backgroundColor = "red"
    } else if (imc >= 25 && imc <= 29.9){
        answer.innerHTML = "Sobrepeso"
        answer.style.backgroundColor = "red"
    } else if (imc >= 18,5 && imc <= 24.9){
        answer.innerHTML = "Peso Normal"
        answer.style.backgroundColor = "green"
    } else {
        answer.innerHTML = "Abaixo do peso"
        answer.style.backgroundColor = "red"
    }
}

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault()
    updateAnswer()
})
