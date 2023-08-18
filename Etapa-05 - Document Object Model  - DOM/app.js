const paiDireto = document.querySelector('.pai-direto')

// Array.from(paiDireto.children).forEach(element => {
//   element.classList.add('nova-classe')
// })


const primeiroIrmao = document.querySelector('.primeiro-irmao')
console.log(primeiroIrmao.parentElement.parentElement)//descobre qual o pai direto do elemento
console.log(primeiroIrmao.nextElementSibling)//descobre qual o proximo irmao do elemento
console.log(primeiroIrmao.previousElementSibling)//descobre qual o irmao anterior do primeiro imao

