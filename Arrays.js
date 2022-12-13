/*
let num = [5, 7, 3, 1]

for (let pos = 0; pos < num.length; pos++ ) {
  console.log(num[pos])
}

let newArray = [10, 20, 30]
let i = 0
let soma = 0

//while (i < newArray.length) {
//  console.log(newArray[i])
//  i++
//}

for (let pos in newArray) { // para pegar a posição do array
  console.log(pos)
 // console.log(newArray[pos])
}
for (let arr of newArray) { // para pegar o valor do array
 // console.log(arr)
}
*/

const nuns = [10, 20, 30]
let soma = 0

for (let cont = 0; cont < nuns.length; cont++) {
  soma = soma + cont
}
console.log(soma)