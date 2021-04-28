// No operador AND, uma proposição falsa faz tudo ser falso. No javascript, a primeira proposição a dar falso é retornado
let testAndOperand = null && 'carlos'
// No operador OR, uma proposição verdadeira faz tudo ser verdadeiro. No javascript, a primeira proposição a dar verdadeiro é retornado
let testOrOperand = undefined || 'João' || 50

console.log(testAndOperand)
console.log(testOrOperand)