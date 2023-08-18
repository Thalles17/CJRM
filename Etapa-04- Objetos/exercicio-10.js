/*
  01

  - Crie um objeto "cat" que possui as seguintes propriedades:
    - name, que recebe o nome do gato;
    - age, que recebe a idade;
    - color, que recebe a cor;
    - bestFriends, que recebe um array com os melhores amigos do gato;
    - sound, que é um método que retorna o miado do gato.
  - Exiba o objeto no console.
*/
console.log('-------------- Exercicios ---------------')
const cat = {
    name: 'Simba',
    age: 1,
    color: 'rajado',
    bestFriends: ['Francis', 'Thalles', 'Marcielene'],
    sound: 'miiiiaaaaauuu'

}

console.log(cat)


/*
  02

  - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações  
    corretas.

 
*/
console.log(` Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "${cat.name}", "age", que recebeu "${cat.age}", "color", que recebeu "${cat.color}", "bestFriends", que recebeu um array com os itens "${cat.bestFriends[0]}" , "${cat.bestFriends[1]}" e "${cat.bestFriends[2]}" e "sound", que recebeu uma função que retorna "${cat.sound}".`)


/*
  03

  - Adicione 2 anos à idade do gato e exiba a idade atualizada no console.
*/

cat.age = 2

console.log(cat.age)

/*
  04

  - Crie uma função que adiciona um amigo(a) no array de amigos do gato;
  - Exiba o array de amigos no console para verificar se o novo amigo(a) foi  
    adicionado.
*/
const addNewFriendOfCat =  (newFriend, object)=>{
    object.bestFriends.push(newFriend)
    
}


/*
  05

  - Crie uma função que adiciona mais uma cor à cor do gato;
  - Utilize a sintaxe de colchetes para fazer isso;
  - Exiba a nova cor do gato no console, também utilizando a sintaxe de  
    colchetes.
*/
const addNewColorCat = (obj)=> {
    obj['color'] += ` e azul`
    
}

addNewColorCat(cat)

const colorProperty = 'color'

console.log(cat[colorProperty])

/*
  06

  - Crie uma função que retorna um boolean indicando se um valor recebido por  
    parâmetro é um objeto;
  - Utilize a função para exibir no console se "cat" é um objeto.
*/
  const isObject = value =>  typeof value === 'object' 

  console.log((cat))
/*
  07

  - Crie um objeto "dog" que possui as mesmas propriedades do objeto "cat";
  - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
  - Exiba a mensagem no console.

  "A soma das idades de NOME_DO_GATO e NOME_DO_CACHORRO é RESULTADO_DA_SOMA."
*/

let dog = {
    name: 'Billy',
    age: 3,
    color: 'white',
    bestFriends: ['guilherme', 'Nathanie', 'Marcelo'],
    sound: 'au au au'
}

const returnPhrease = (cat, dog) =>  `A soma das idades de ${cat.name} e ${dog.name} é ${cat.age + dog.age}`

const ageMenssage = returnPhrease(cat, dog)

console.log(ageMenssage)

/*
  08

  - Se você descomentar os 2 console.log abaixo, verá que a função "isAnSUV"  
    está funcionando corretamente. Mas ela pode ser melhorada;
  - Como você refatoraria esta função?
*/
const cars = ['Honda HR-V','Jeep Renegade','Ford EcoSport','Hyundai iX35']

const isAnSUV = car => {

    if (car) {
      return true
    }
  
    return false
  }
  

  // const isAnSUV = car => car = [
  //   'Honda HR-V',
  // 'Jeep Renegade',
  // 'Ford EcoSport',
  // 'Hyundai iX35'
  // ].includes(car)



   console.log(isAnSUV('Honda Civic'))
  console.log(isAnSUV('Ford EcoSport'))
  
  /*
    09
  
    - Crie uma função que recebe um parâmetro 'type';
    - Dentro da função, crie um objeto com as seguintes propriedades:
      - null, que recebe a mensagem 'Seta, explicitamente, uma variável sem valor.'
      - undefined, que recebe a mensagem 'Representa um valor não-setado.'
      - object, que recebe a mensagem 'Arrays, Datas, Objetos literais, Funções, etc.'
    - Se o valor que o parâmetro type receber corresponder à alguma das 3  
      propriedades, retorne a mensagem que a propriedade armazena;
    - Teste a função, exibindo no console a mensagem de cada propriedade.
  */

    // const whichThetype = type => {//parametro é uma variavel local
    //   let typeData = {
    //     null: `Seta, explicitamente, uma variável sem valor.`,
    //     undefined: `Representa um valor não-setado.`,
    //     object: `Arrays, Datas, Objetos literais, Funções, etc.`
    //   }

    //     return typeData[type]
     
    // }

    // console.log(whichThetype('null'))
    // console.log(whichThetype('undefined'))
    // console.log(whichThetype('object'))

    //outra forma de de fazer 
    const whichThetype = type => {//parametro é uma variavel local
      
       return {
        null: `Seta, explicitamente, uma variável sem valor.`,
        undefined: `Representa um valor não-setado.`,
        object: `Arrays, Datas, Objetos literais, Funções, etc.`
      }[type]

        
     
    }

    console.log(whichThetype('null'))
    console.log(whichThetype('undefined'))
    console.log(whichThetype('object'))