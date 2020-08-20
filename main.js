// REST

const usuario = {
    nome: 'Edu',
    idade: 19,
    empresa: 'N/A'
}

const { nome, ...resto } = usuario

console.log(nome)
console.log(resto)

const arr = [1, 2, 3, 4]
const [ a, b, ...c ] = arr

console.log(a)
console.log(b)
console.log(c)


function soma(...parms) {
    return parms.reduce((total, next) => total + next)
}

function soma1(a, b, ...params) {
    return params
}

console.log(soma(1, 3, 4))
console.log(soma1(1, 2, 3, 4, 5, 6, 7))

// Spread

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [ ...arr1, ...arr2]
console.log(arr3)

const usuario1 = {
    nome: 'L',
    idade: '19',
    empresa: 'N/AA'
}

const usuario2 = { ...usuario1, nome: 'Oliveira'}
console.log(usuario2)