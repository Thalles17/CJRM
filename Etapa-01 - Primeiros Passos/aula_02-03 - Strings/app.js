// Strings
console.log('hello, world')

const email = 'leon@rogermelo.com.br'

// Concatenção de strings
const firstName = 'Nathan'
const lastName = 'Drake'
const fullName = firstName + ' ' + lastName

console.log(fullName)


// acessando caracteres
console.log(firstName[0])//acessando a letra pelo indice  - 'N'
//JS é zero base

// comprimento de uma string,
//length - comprimento de uma string
console.log(fullName.length)

// métodos de string
//toUpperCase
console.log(fullName.toUpperCase())//invocando o método

const result = fullName.toLowerCase()

console.log(result)
/*
toUpperCase,
toLowerCae nao alteram a variável original
*/

const index = email.indexOf('@')

console.log(index)

