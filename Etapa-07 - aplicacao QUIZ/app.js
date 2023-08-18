const correctAnsewers = ['B','B','B','B']//array das respostas corretas
const form = document.querySelector('.quiz-form')
console.log(form)
form.addEventListener('submit', event =>{
    event.preventDefault()

    let score = 0 
    const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    ]
    
    userAnswers.forEach((userAnswers, index) =>{
        if(userAnswers === correctAnsewers[index]){
            score += 25
            console.log('acertou... o miseravii',userAnswers)
            return
        }
        console.log('errou a resposta...', userAnswers)
    })
    console.log(score)

})