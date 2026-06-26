const numeros = [1, 2, 3, 4, 5];
/* let total = 0;

numeros.forEach(numero => total += numero) */

let total = numeros.reduce(
    (valorAnterior, valorAtual) => valorAnterior + valorAtual,
);

console.log(total);
