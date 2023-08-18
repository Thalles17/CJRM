const posts = [
    {title:'Emapadao de frango', likes: 30},
    {title: '4 receitas de pure de batata', likes: 52}
]

console.log(posts)









let user = {
    name: 'Joao',
    age: 29,
    email: 'joaocardoso@gmail.com',
    city: 'São Paulo',
    blogPosts: [
        {title:'Emapadao de frango', likes: 30},
        {title: '4 receitas de pure de batata', likes: 52}
    ],
    login: ()=>{//método
        console.log('usuario logado!!!')
        return
    },
    logout: ()=>{
        console.log('usuario deslogado')
    },
    logoBlogSpots (){
        console.log((`${this.name} escreveu os seguintes posts:`))

        this.blogPosts.forEach( post=>{
            console.log(post.title, post.likes)
        })
    }

}

user.logoBlogSpots()