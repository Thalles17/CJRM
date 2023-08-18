/*
ForEach
- Causa efeito colateral
- percorre os itens de um array ou de um objeto e retorna esse item
- sendo somente obrigatório o item na passagem de parametro do forEach
- index e array são opcionais
*/

const numbers = [1, 2, 3, 4]

numbers.forEach((item, index, array)=>{
  console.log(`esse é o iem numero ${item}, no index ${index} do array {${array} }`)
  alert(`esse é o iem numero ${item}, no index ${index} do array ${array}`)
})