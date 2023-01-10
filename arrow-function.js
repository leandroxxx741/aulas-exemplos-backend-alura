function apresentar(nome) {
    return `meu nome e ${nome}`;
}

//Arrow function
const apresentarArrow = nome => `meu nome e ${nome}`;
const soma = (numero1, numero2) => numero1 + numero2;

//Arrow function com + de 1 linha de instrucao

const somaNumerosPequenos = (numero1, numero2) => {
    if (numero1 > 10 || numero2 > 10) { 
        return "somnte numeros de 1 a 9"
    } else {
        return numero1 + numero2;
    }
}

//Hoisting: arrow function se comporta como expressao

//operador maior ou igual que
// >=