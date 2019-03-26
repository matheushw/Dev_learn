const r = Math.random();
const dado = 1 + Math.floor(r * 6);
let resultado;

if (dado >= 5) resultado = "Ganhou";

else resultado = "Perdeu";

console.log(resultado);