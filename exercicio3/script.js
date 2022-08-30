//Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeira ou falsa:

const operacaoA = 5 > 20 && 5 < 2
const operacaoB = 5 === 5 || 5 === "cinco"
const operacaoC = !(20 > 50)
const operacaoD = !(20 > 50 || 50 > 70)

console.log("5 é maior que 20 e também é menor que 2", operacaoA)
console.log("5 é igual a 5 ou é igual a “5”", operacaoB)
console.log("negação de (vinte é maior que cinquenta)", operacaoC)
console.log("negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)", operacaoD)

//mesmo que vinte não seja maior que cinqueta ou cinqueta maior que sessenta, a operação irá dar true pois está com negação na frente.