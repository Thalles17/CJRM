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

//Strings - 'armazena letras e palavras - tudo que for caractere'


console.log('hello, wold')

const email = 'leon@rogermelo.com.br'

console.log(email.length,  ' esse é o tamanho da string')//length - tamanho da string ou do array
// length === tamanho

//concatenando strings

const firstName = 'Nathan'
const lastname = 'Drake'
const fullName = firstName + ' ' + lastname


//acessando caracteres
console.log(fullName[7])

//metodos de string
console.log(fullName.toUpperCase())

//toUpperCase() - retorna todos os caracteres em Maiusculos
console.log(fullName.toUpperCase())

//toLowerCase() - retorna todos os caracteres em Minusculos
console.log(fullName.toLowerCase())

//indexOf()
const index = email.indexOf('@')

console.log(index)

//metodos mais comuns de strings

//lastIndexOf() - retorna a ultima ocorrencia do carectere passado como argumento


//Slice() - vai fatiar a partir do index que eu desejo até onde desejo que seja cortada a string
/*
O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é incluído) de um array original. O Array original não é modificado.

*/

//replace() - subusti um caractere por outro no argumento que foi passado

const emailReplace = email.replace('leon', 'yara')
console.log(emailReplace)//retorna yara@rogermelo.com.br



/*** Numbers ***/

//inteiros e decimais
const radius = 10
const pi = 3.14
const area = pi * radius ** 2
console.log(area)

//operadores aritméticos
const remainder = 5 % 2

console.log(remainder)

//ordem de opereções

/*
- 1° Parenteses
- 2° expoentes ou raizes
- 3° Multiplicação e divisao
- 4° adição e subtração
*/

const crazyOperation = 5 * (10 - 3) ** 2

console.log(crazyOperation)// 245 output

//operadores de incremento e decremento
let postlikes = 10 

postlikes++//incremento
console.log(postlikes)

postlikes--//decremento
console.log(postlikes)


//operators addition, subtraction, multiplication e division

postlikes += 5//postilikes recebe o valor que já tem mais 5
console.log(postlikes)
postlikes -= 5 // postilikes recebe o valor que ja tem menos 5
console.log(postlikes)
postlikes /= 5 // postilikes recebe o valor que ja tem dividido por 5
console.log(postlikes)
postlikes *= 5// postilikes recebe o valor que ja tem vezes 5
console.log(postlikes)

//NaN - Not a number
console.log(7 / 'oi')//expressoes que nao tem sentido retornam NaN

//cocatenação de string com número
const likesMessage = 'o post tem ' + postlikes + ' likes.'
console.log(likesMessage)