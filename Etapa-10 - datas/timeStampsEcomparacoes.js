const past = new Date('Jun 20 2023 9:15:00')//Data do passado
const present = new Date()//Data atual

const difference = present.getTime() - past.getTime()
console.log(difference)
//mostrando o timeStamp do passado e do presente

//diferença de tempo entre as duas datas

const seconds = Math.round(difference / 1000) // segundos
console.log({seconds})
const minutes = Math.round(seconds / 60) // Minutos
console.log({minutes})
const hours = Math.round(minutes / 60) // horas
console.log({hours})
const days = Math.round(hours / 24) // dias
console.log({days})
