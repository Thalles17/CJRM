const postTitle = 'É bolacha ou é biscoito?'
const postAuthor = 'Matheus Saad'
const postComments = 15

//usando concatenação
const postMensage = 'O post "' + postTitle + '", do ' + postAuthor + ', tem ' + postComments + ' comentários'

console.log(postMensage)
console.log("'Voce manja do filme ' as brnaquelas '?'")
//usando template strings

const postMensage2 = `O post   ${postTitle}, do  ${postAuthor}, tem ${postComments}  comentários`

console.log(postMensage2)

//criando templates html