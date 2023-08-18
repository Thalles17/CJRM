//PRIMEIRA COISA A FAZER É CRIAR UM OBJETO DE RQUEST;

const request = new XMLHttpRequest( )//objeto de request - aceita arquivos xml e json

request.addEventListener('readystatechange', ()=>{
    if(request.readyState === 4){//estado 4 que da para fazer alguma coisa com a resposta obida do request
      console.log(request, request.responseText) //json obtido da requisição
    }
  // console.log(request, request.readyState)
})



request.open('GET', 'https://jsonplaceholder.typicode.com/todos')//metodo usado para obter a requisição HTTP
/*
Método open aceita 2 argumentos .... primeiro é o metodo que vai ser passado como argumento que pode ser:
GET = obter informaçoes do servidor
POST = inserir informações no servidor
UPDATE = atualizar informações do servidor que contem la 
DELETE = deletar informações do servidor 

e depois é passado o endpoint (url) na  qual a requisição é passada. https://jsonplaceholder.typicode.com/todos

ficnado assim .... request.open('GET', 'https://jsonplaceholder.typicode.com/todos')

*/
request.send()//envia o request de fato
