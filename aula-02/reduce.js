const soma = (acc, cur) => cur + acc;

let v = [1, 2, 3];

v = v.reduce(soma, 10); // v vale 16

console.log(v);