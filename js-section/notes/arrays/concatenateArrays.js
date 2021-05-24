const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

// Uma forma, usando método concat
const a3 = a1.concat(a2, [7, 8, 9], 'Carlos')

// Outra forma, usando spread operator
const a3 = [...a1, ...a2, ...[7, 8, 9], 'Carlos']

console.log(a3)