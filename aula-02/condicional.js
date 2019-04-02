// ==================================================
//          PRIMEIRA PARTE
//
// nas linhas 8 a 15, defina como se pede
//      - uma constante x que vale o resultado de um sorteio aleatório (~~random~~)
//      - uma constante limite que vale 0.42
//      - uma variável mensagem sem nenhum valor inicial
const x = Math.random();
const limite = 0.42;
let mensagem;





// ==================================================
//          SEGUNDA PARTE
//
// vamos movimentar essas variáveis acima
// nas linhas abaixo, escreva um código que
// SE x for menor que o limite, a mensagem deve ser "tudo ok"
// SENÃO a mensagem deve ser "passou do limite!"
// e então exibe a mensagem na saída

if (x<limite) console.log("tudo ok");
else console.log("passou do limite!");