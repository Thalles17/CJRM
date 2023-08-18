let user = {
    name: 'Joao',
    age: 29,
    email: 'joaocardoso@gmail.com',
    city: 'São Paulo',
    blogPosts: ['Emapadao de frango', '4 receitas de pure de batata'],
    login: ()=>{//método
        console.log('usuario logado!!!')
        return
    },
    logout: ()=>{
        console.log('usuario deslogado')
    }

}

user.age = 32

console.log(user)
console.log(user.name)
console.log(user.age)
console.log(user.blogPosts)


//acessar ou modificar a propriedade de um objeto utilizando a notação de colchetes "[ ]"

console.log(user['email'])


const carros = ['porsche', 'camaro', 'lamborguine']


//métodos de objetos

user.login()
user.logout()

