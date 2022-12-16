/*
const lista = [18, 10, 19, 70, 80, 15, 22, 29, 35, 42, 59, 60, 22, 29, 79, 99]
let obrigatorio = 0
let facultativo = 0
let naoEleitor = 0

for (let idade of lista) {
  if (idade >= 18 && idade <= 69) obrigatorio++ 
  else if (idade < 16) naoEleitor++
  else facultativo++
}
console.log('Obrigatorio: ', obrigatorio)
console.log('Facultativo: ', facultativo)
console.log('Não eleitor: ', naoEleitor)

const lista = [10, 20 , 30, 40, 50]

for (let pos in lista){
  console.log(lista[pos])
}

const nums = [10, 20, 30, 40, 20]
let soma = 0
for (let num of nums) {
  soma = soma + num
}
let media = soma / nums.length
console.log(media)


const lista = [10, 20, 30]
let soma = 0
for (let pos = 0; pos < lista.length; pos++) {
  soma = soma + lista[pos]
}
let media = soma / lista.length
console.log(media)

let num = 0 
let = soma = 0

while (num < 10) {
  num = num + 1
  soma = soma + num 
}
console.log(soma)
*/

function soma (n1, n2) {
  return n1 + n2
}

console.log(soma(5, 5))