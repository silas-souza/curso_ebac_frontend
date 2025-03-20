
    class Animal {
        constructor(nome, idade) {
        if (new.target === Animal) {
            throw new TypeError("Não é possível instanciar uma classe abstrata diretamente.");
        }
        this.nome = nome;
        this.idade = idade;
        }


        fazerSom() {
        throw new Error("Método 'fazerSom' deve ser implementado.");
        }
    

        mostrarInfo() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade} anos`);
        }
    }

    class Cachorro extends Animal {
        fazerSom() {
        return "Au Au!";
        }
    }
    

    class Gato extends Animal {
        fazerSom() {
        return "Miau!";
        }
    }
    

    const cachorro1 = new Cachorro("Rex", 3);
    const gato1 = new Gato("Mimi", 2);
    const cachorro2 = new Cachorro("Buddy", 5);
    

    cachorro1.mostrarInfo();
    console.log(`${cachorro1.nome} faz: ${cachorro1.fazerSom()}`);
    
    gato1.mostrarInfo();
    console.log(`${gato1.nome} faz: ${gato1.fazerSom()}`);
    
    cachorro2.mostrarInfo();
    console.log(`${cachorro2.nome} faz: ${cachorro2.fazerSom()}`);