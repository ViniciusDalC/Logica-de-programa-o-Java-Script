/*function parimp(n) {
  if (n % 2 == 0) {
    return true
  } else {
    return false
  }
}
let res = parimp(4)
console.log(res)


function soma (n1, n2) {
  return n1 + n2
}
 console.log(soma(5, 10))

 function fatorial (n) {
  let fat = 1
  for (let c = n; c > 1; c--) {
    fat *= c
  }
  return fat
 }
 console.log(fatorial(5))


function par (num) {
  return num % 2 === 0
}
let soma = 0
for (let  i = 0; i <= 100; i++) {
  if (par(i)) console.log(i)
  soma = soma + i
}

console.log(soma)

let resp = 8

for (let i = 0; i <= 10; i++) {
  resp = 8 * i
  console.log(resp)
}

function tabuada (n) {
  for (let i = 1; i <= 10; i++){
    let mult = n * i
    console.log(mult)
  }
}

for (let i = 1; i <= 10; i++) {
  tabuada(i)
}

let soma = 0

for (let i = 0; i <= 10; i++) {
  soma =+ i
  console.log(soma)
}
*/

function fatorial (n) {
  let fat = 1
 while (n >= 1) {
  fat = fat * n
  n--
 }
 return fat
}
console.log(fatorial(4))