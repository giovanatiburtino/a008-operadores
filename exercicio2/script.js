//Faça um programa que pergunte ao usuário dois números.

let numeroA = Number (prompt ("Insira um número:"))
let numeroB = Number (prompt("Insira outro número:"))

//Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`

console.log(`
O primeiro número é maior que o segundo? ${numeroA > numeroB}
O primeiro número é igual ao segundo? ${numeroA === numeroB}
O primeiro número é divisível pelo segundo? ${numeroA % numeroB === 0}
O segundo número é divisível pelo segundo? ${numeroB % numeroA === 0}
`)

//divisível = com resto zero