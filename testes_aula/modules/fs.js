const fs = require('fs');
const path = require('path');


/* 
============================================
Cria uma nova pasta
============================================
*/
/* 
    A função mkDir além do diretório que será criado, recebe também um callback. Esse callBack se comporta como uma Promisse. Ou seja, se trata de uma função assincrona.

    "Joãozinho, eu vou esperar você criar o diretório, e quando você o fizer, eu exibirei uma mensagem".

    Nesse caso, ele poderá exibir uma mensagem de erro, ou uma mensagem que informa que o diretório foi criado.
*/
fs.mkdir(path.join(__dirname, "test"), (err) => {
    if(err) {
        return console.log(`Erro: ${err}`);
    }

    console.log('Pasta Criada com Sucesso');
})



/* 
============================================
Cria um arquivo ou sobrescreve o seu conteúdo
============================================
*/

/* 
    Para essa função, são passados os parâmetros de diretório + o arquivo com seu formato, o conteúdo deste arquivo e o callback que pode retornar uma mensagem (semelhante a função anterior)
*/

fs.writeFile(path.join(__dirname, "test", "test.txt"), "Hello World!", (err) => {
    if(err) {
        return console.log(`Erro: ${err}`);

    }
    console.log('Arquivo Criado com sucesso!');
})


/* 
============================================
Adiciona à um arquivo 
============================================
*/
fs.appendFile(path.join(__dirname, "test", "test.txt"), 'Olá Mundo!', (err) => {
    if(err) {
        return console.log(`Erro: ${err}`);

    }
    console.log("Arquivo modificado com sucesso!");
})


/* 
============================================
Lê um arquivo
============================================
*/
fs.readFile(path.join(__dirname, 'test', 'test.txt'), 'utf-8', (err, data) => {
    if(err) {
        return console.log(`Erro: ${err}`);

    }
    console.log(data);
})