const form = document.querySelector('.signup-form')//pegando o form pelo DOM
const userNameInput = document.querySelector('#username')
const feedback = document.querySelector('.feedback')

const testUserName = username => /^[a-zA-Z]{6,20}$/.test(username)

form.addEventListener('submit', (event)=>{
    event.preventDefault()

    const isValidUserName = testUserName(event.target.username.value)



    if(isValidUserName){
        feedback.textContent = `passou nesse caralho!!!`
        return
    }

    feedback.textContent = `NAO passou nesse caralho!!!! FDP!!!`

})
//


/*
REGEX = expressoes regulares - padroes de combinações de padroes de caracteres

1° passso - definir o tipo de padrao a ser adotado



EXPRESSAO REGULAR COMEÇA COM / E FINALIZA COM /


*/

const username = "Thal"
const pattern = /^[a-z]{6,}$/
const result = pattern.test(username)
console.log(result)

// if(result){
//     console.log("passou no teste da regex")
// }else{
//     console.log('nao passou no teste')
// }

form.username.addEventListener('keyup', event => {
    const isValidUserName = testUserName(event.target.value)

    if(isValidUserName){
        form.username.setAttribute('class','success')
        console.log('é valido')
        return
    }
    form.username.setAttribute('class','error')
    console.log('nao é valido')
})