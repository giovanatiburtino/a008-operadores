//Construa um programa que:
// a) Peça ao usuário que insira um número **par**
// b) Imprima no console **o resto da divisão** desse número por 2.

const par = Number (prompt ("Insira um número par:"))

const divisao = par / 2 
const resto = par % 2

console.log("número divido:", divisao)
console.log("resto da divisão:", resto)

//Teste o programa com diversos números pares. Você notou um padrão? 

//O resultado padrão será zero, pois números pares não tem resto de divisão.



// O que acontece no console se o usuário inserir um número ímpar?

// O resultado com número impar sempre será 1.