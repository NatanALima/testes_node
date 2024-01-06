class Person {
    constructor(nome) {
        this.nome = nome;

    }

    sayMyName() {
        return `O nome informado é ${this.nome}!`;
    }

}


module.exports = {
    Person,
}