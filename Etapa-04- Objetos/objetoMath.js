console.log(Math)
console.log(Math.PI)//valor de PI
console.log(Math.E)//base doslogaritmos matematicos

const area = 7.7

//round arredonda para baixo se for <menor> que 5 e aumenta se for > igual 5
console.log(Math.round(area))
//sempre arredonda para baixo mesmo que seja maior ou igual a .5
console.log(Math.floor(area))
//sempre arredonda para cima de .5 mesmo que seja menor que .5
console.log(Math.ceil(area))
//remove o decimal e retorna a parte intera dele
console.log(Math.trunc(area))



//random gera um numero aleatório decimal entre 0 e 1
const randomNumber = Math.random()
console.log(randomNumber)

//numeros aleatórios
console.log(Math.round(randomNumber * 100))