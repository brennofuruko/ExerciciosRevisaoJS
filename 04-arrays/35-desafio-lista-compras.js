// EXERCÍCIO 35 - DESAFIO FINAL

let precos = [20, 15, 30, 10, 25];

// Faça:
// 1. Percorra o array.
// 2. Mostre cada preço.
// 3. Some todos os preços.
// 4. Mostre o valor total.
// 5. Se o total for maior ou igual a 100,
//    mostre "Compra acima de R$ 100".
//    Caso contrário, mostre "Compra abaixo de R$ 100".
//
// Utilize apenas conceitos estudados na revisão.

// Escreva sua solução abaixo:
let listaPrecos = Array(20, 15, 30, 10, 25);
let total = 0;

for (let i = 0; i < listaPrecos.length; i++) {
  console.log(listaPrecos[i]);
  total += listaPrecos[i];
}

console.log("Valor total: " + total);

if (total >= 100) {
  console.log("Compra acima de R$ 100");
} else {
  console.log("Compra abaixo de R$ 100");
}
