/*
bloco de código são pequenos bloco de códigos
quando uma execução executa em true

O que é escopo: é a area que uma variavel tá disponivel para gente utilizar

*/

//escopo de bloco com variaveis


const age = 99 //raiz do documento - fora de um bloco de código - pode ser usada em qualquer lugar do arquivo

if(true){//escopo de código
    //alterando a variavel dentro do código


    const age = 41//age mais PROXIMA

    //essa variavel age só pode ser acessada dentro desse escopo
    const name = 'Thalles'
    console.log(`DENTRO do 1° escopo de código: ${age} ${name}`)

    if(true){//bloco de código ANINHADO dentro do primeiro IF
        const age = 51
        console.log(`DENTRO do 2° bloco de código ${age}`)//pegando o valor da ege mais PROXIMA
    }
}

console.log(`FORA do escopo de código: ${age} ${name}`)
//fora do escopo local não acha a variavel name