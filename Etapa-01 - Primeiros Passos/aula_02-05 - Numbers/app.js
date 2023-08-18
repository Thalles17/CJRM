//Inteiros e decimais
const radius = 10
const pi = 3.14

console.log(pi)

const remainder = 5 % 2//modulo - resto da divisão
console.log(remainder)

//tipos de operadores matematicos
addition = '+'
subtraction = '-'
multiplication = '*'
division = '/'
exponentiation = '**'

// Ordem de operadores


const crazyOperation = 5 * (10 - 3) ** 2
console.log(crazyOperation)
/*
1° parenteses/
2° expontes ou raizes/
3° multiplicação e divisão/
4° adição e subtração/
*/


//Operadores de incremento e decremento
let postlikes =  10
postlikes = postlikes + 1

postlikes--

console.log(postlikes)


//Operadores aritméticos - // Operadores addition, subtraction,  multiplication e division assignment
postlikes += 35 // recebe o valor que ela ja tem mais 35

//NaN - not a number
console.log(7 * 'oi')//Operação ou expressao que não faz sentido

//concatenação de string com número
let number = 7
let phraseInitial =  ` Você tem `
let phraseFinal = ` anos de idade. `

console.log(phraseInitial + number + phraseFinal)