/*
tipos de dados:

- String
- boolean
- number
- Objects
- null
- undefined
- Symbol
- BigInt

*/

//Booleans - 'Sempre retornam verdadeiro ou falso'

//Métodos  podem retornar booleans
const email = 'brucewayne@rogermelo.com.br'

const includes = email.includes('#')//retorna true ou false
//metodo includes retorna se na string passada tem o caracatere passado como argumento
console.log(includes)

//Metodo includes pode ser usado tanto em strings como em arrays....

const names = ['dio', 'roger', 'robert']//array de nomes
const arrayIcludes = names.includes('roger')//variavel mostra se tem o nome passado no includes ou nao
console.log(arrayIcludes)//true or false

//Operadores de comparação
const age = 31

console.log(age == 31)//retorna true
console.log(age == 35)//retorna false //igual a
console.log(age != 35)//retorna true //não igual //diferente de
console.log(age > 30)//retorna true //maior que
console.log(age > 31)//retorna false //maior que
console.log(age < 32)//retorna true //menor que 
console.log(age <= 31)//retorna true //menor ou igual 
console.log(age >= 31)//retorna true //maior ou igual

//caracteres minusculos são maiores que caracteres maiusculas



//'igual a, e do mesmo tipo' e 'diferente de, e do mesmo tipo'
console.log(age === 31)//sinal de comparação estrita
//SEMPRE VERIFICA O VALOR E O TIPO

console.log(age !== 31)//diferente de 

//conversao de tipos
let score = '100'
score = Number(score)//converte para numero
console.log(score + 1)
console.log(typeof score)


const crazyConvertion = Number('Maça')
console.log(crazyConvertion)

covertNumber = String(97)
const booleanConversion = Boolean(10)
console.log(10)

/*
Valores falsy
- false
- 0
- "", '', ``
- null
- undefinened
- NaN

Valores truthy
-Qualquer valor que não é falsy
*/

console.log(Boolean('0'))