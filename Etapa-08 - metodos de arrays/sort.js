//SORT - ordenar
//sort modifica o array original;




//exemplo 1: ordenando strings
const names = ['Thalles', 'Marcilene', 'Simba', 'Fernanda']
names.sort()
console.log(names)

//exemplo 2: ordenando números
const numbers = [10, 2, 5, 0, 55, 65, 75]
numbers.sort((item2, item1)=> item1 - item2)
console.log(numbers)


//exemplo 3: ordenando objetos
const   theBigFamily = [
  { name: 'Lineu', score: 20 },
  { name: 'Nenê', score: 10 },
  { name: 'Tuco', score: 50 },
  { name: 'Bebel', score: 30 },
  { name: 'Agostinho', score: 70 }
]

theBigFamily.sort((item1, item2)=>{
  if(item1.score > item2.score){
    return -1
  }else if(item2.score > item1.score){
    return 1
  }
  return 0
})

console.log(theBigFamily)