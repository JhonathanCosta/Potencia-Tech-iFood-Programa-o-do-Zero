class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }

        const mensagem = `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}

// Exemplo de uso:
const heroi1 = new Heroi("Aragorn", 35, "guerreiro");
const heroi2 = new Heroi("Gandalf", 200, "mago");
const heroi3 = new Heroi("Bruce Lee", 32, "monge");
const heroi4 = new Heroi("Hanzo", 28, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
