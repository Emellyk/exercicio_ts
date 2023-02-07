"use strict";
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    dizOla() {
        return "Olá" + `${this.nome}`;
    }
}
