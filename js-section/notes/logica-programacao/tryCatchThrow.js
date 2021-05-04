function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') throw new Error("x e y precisam ser número")
    return x + y
}

try {
    soma('1', 2)
    console.log("Não vou ser executado")
} catch (error) {
    console.log(error)
    console.log(error.message)
} finally {
    console.log("Finally")
}