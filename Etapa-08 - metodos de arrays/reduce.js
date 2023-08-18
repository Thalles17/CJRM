/*REDUCE  - TODO PODEROSO
- obtem um novo array com a mesma quantidade de itens do array original só que com cada item trasformado
Vai usar o reduce quando baseado no array original, precisarmos REDUZIR oarray a algum outro tipo de dado........ obj literal, string, number ou até mesmo outro array;

*/

const numbers = [1, 2, 3]

const sumResult = numbers.reduce((acc, item, index , array)=> acc + item, 0)
//a função de callback tem SEMPRE que retorna um valor.... E o paramentro acumullator recebe esse valor final que o reduce retornar
//o valor inicial "0" no caso é BOM especificar ele para mostrar o tipo de dado que vai retornar
//valor inicial só serve para começar a contagem ... depois não é mais usado.
console.log(sumResult)



const  phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 }
]

const poitersRoger = phaseScores.reduce((acc, phaseScores) => {
  if(phaseScores.name === 'Roger Melo'){
    acc += phaseScores.score
  }

  return acc
}, 0)
console.log(poitersRoger)