class Person {
    constructor(nome) {
        this.nome = nome;

    }

    sayMyName() {
        return `O nome informado é ${this.nome}! Usando Nodemon`;
    }

}


module.exports = {
    Person,
}