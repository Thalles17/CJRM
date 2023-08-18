//Métodos cumuns de strings
const email = 'laracroft@rogermelo.com.br'

//indexOf - método que quarda a primeira ocorrencia da string passada
const indexOf = email.indexOf('a')
console.log(indexOf)

//lastIndexOf - método que guarda a ultima ocorrencia da string passada
const emailLastIndexOf = email.lastIndexOf('a')
console.log(emailLastIndexOf)

//Slice - fateia a string do ponto incial ao ponto final que deseja fatiar a string
const emailSlice = email.slice(0, 4)
console.log(emailSlice)//lara

//replace - subistui uma string por outra
const emailReplace = email.replace('lara', 'chun-li')
console.log(emailReplace, email)