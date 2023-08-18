*** javascript assincrono. ***

Operaçãoes que elevam um certo tempo para executar.

Operação inicia o processo agora e finaliza a operação posteriormente

javascript é uma linguagem sincrona - single thread "unico fio"

uma instrução é executada de CIMA para BAIXO de forma sincrona uma depois da outra


 código sincrono = codigo blocante
- instrução 1 //primeiro
- instrução 2 //segundo
- instrução 3 - leva tempo - (BANCO DE DADOS)
- instrução 4                    ⬇️⬇️⬇️⬇️⬇️
                                     ⬆️ 
                                     ⬆️
 - callback ➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️⬆️        



 código Assincrono = começa agora e termina depois;
- instrução 1
- instrução 2
- instrução 3 - ➡️➡️➡️➡️➡️ - (BANCO DE DADOS) - manda para uma tread separada
- instrução 4                    ⬇️⬇️⬇️⬇️⬇️
                                     ⬇️ 
                                     ⬇️
 - callback ⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬇️                                      




