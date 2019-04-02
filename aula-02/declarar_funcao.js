function soma (a,b) {
    return a+b;
}

const soma2 = function (a,b) {
    return a+b;
}

//Melhores maneiras de declarar funções (sem falha de emcapsulamento).

const soma3 = (a,b) => {
    return a+b;
} 

const soma4 = (a,b) => a+b;

console.log(soma(1,2));