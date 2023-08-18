/*Códigos de status de resposta HTTP
Os códigos de status de resposta HTTP indicam se uma solicitação HTTP específica foi concluída com êxito. As respostas são agrupadas em cinco classes:

Respostas informativas ( 100- 199)
Respostas bem-sucedidas ( 200- 299)
Mensagens de redirecionamento ( 300– 399)
Respostas de erro do cliente ( 400– 499)
Respostas de erro do servidor ( 500– 599)
*/

//PRIMEIRA COISA A FAZER É CRIAR UM OBJETO DE RQUEST;

const request = new XMLHttpRequest( )//objeto de request - aceita arquivos xml e json

request.addEventListener('readystatechange', ()=>{
    if(request.readyState === 4 && request.status === 200){//estado 4 que da para fazer alguma coisa com a resposta obida do request
      console.log(request, request.responseText) //json obtido da requisição
    }
  // console.log(request, request.readyState)
})



request.open('GET', 'https://jsonplaceholder.typicode.com/todos')//metodo usado para obter a requisição HTTP

request.send()//envia o request de fato
