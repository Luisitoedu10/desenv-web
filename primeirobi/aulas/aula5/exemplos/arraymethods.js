const frutas = [
    "maça",
    "banana",
    "abacaxi",
    "morango",
    "abacate",
    "abacate",
    "abacate",
];
// const numerosV2 = []
const numeros = [1, 2, 3, 4, 5];

/* for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    numerosV2.push(element * 2)
} */

const numerosV2 = numeros.map((numero) => numero * 2);
const abacates = frutas.map((fruta) => fruta + "abacate");

const onlyAbacates = frutas.filter((fruta) => fruta == "abacate");

console.log(onlyAbacates);
