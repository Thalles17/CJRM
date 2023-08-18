/* this
o que é o this: é um objeto de contexto
ele representa o contexto  no qual o código atual tá sendo executado

dependendo de ONDE ou COMO usa o this o valor dele vai mudar

arrow function funcionam de forma diferente com o this


quando for usar o this dentro de um método, se agente quiser que o metodo referencie o objeto no qual o metodo foi criado,então tem que usar function decoration ao invés de arrow function
*/

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
    },
    
    //acessar a propriedade blogPosts
    // logBlogPost: function () {//funtion decoration
    //     //no escopo local ele referencia o próprio objeto user
    //     console.log(`${this.name} escreveu os seguintes posts:`)
    //     this.blogPosts.forEach(post => {//percorrendo cada post do metodo blogPosts

    //         console.log(post)//visualizando o post que tá sendo passado por paramento no forEach
    //     })
    // }


    //shortcut - atalho
    logBlogPost() {//funtion decoration
        //no escopo local ele referencia o próprio objeto user
        console.log(`${this.name} escreveu os seguintes posts:`)
        this.blogPosts.forEach(post => {//percorrendo cada post do metodo blogPosts

            console.log(post)//visualizando o post que tá sendo passado por paramento no forEach
        })
    }

}

 user.logBlogPost()

//console.log(this)//referencia o contexto global - window object