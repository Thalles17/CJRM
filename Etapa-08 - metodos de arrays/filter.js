/*FILER 
- Gera um novo array quando baseado em uma condição voce precisar obter um novo array SÓ COM ALGUNS ITENS do array original
- NAO MODIFICA O ARRAY ORIGINAL
- pode receber 3 parametros: item , index, array - Item é obrigatório
*/

// const randomNumbers = [36, 99, 37, 63, 51, 43,39,65,22]

// const numbersGreaterThan37 = randomNumbers.filter( number => number > 37)
// console.log({numbersGreaterThan37, randomNumbers})


const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true }
]

const usersPremiums = users.filter( user => user.premium === false)

console.log(usersPremiums)