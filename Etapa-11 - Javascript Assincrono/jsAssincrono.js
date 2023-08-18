console.log(1)
console.log(2)

setTimeout(()=> {//leva um certo tempo para ser executado 
  console.log('pesquisa no banco de dados executada!')//código assincrono
}, 9000)

console.log(3)
console.log(4)


const getName = (name)=> {
  return name
}

getName('thalles')