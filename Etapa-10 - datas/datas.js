//Em JS Datas são objetos
//tipos de referencia

//Date Constructor - cria um novo objeto
//new é inserido antes do construtor
const present = new Date()


console.log(present, typeof present)
console.log('getFullYear', present.getFullYear(), 'ANO')
console.log('getMonth', present.getMonth(), 'MES')
console.log('getDay', present.getDay(), 'DIA')
console.log('getHours', present.getHours(), 'HORA')
console.log('getMinutes', present.getMinutes(), 'MINUTOS')
console.log('getSeconds', present.getSeconds(), 'SEGUNDOS')


//TimeStamp
console.log('timestamp', present.getTime())

console.log(present.toDateString())
console.log(present.toTimeString())
console.log(present.toLocaleString())


