/*let peixe = 50

if (peixe <= 50) {
  console.log('peso permitido')
}else if (peixe > 50){
  let exesso = peixe - 50
  let pagar = exesso * 4
  console.log('O exesso é de ' + exesso + 'kg')
  console.log('Total a pagar R$' + pagar)
}

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

let fat = 1

for (let i = 10; i >= 1; i--){
  fat = fat * i 
}
console.log(fat)

let resp = 0

function funcao (num, por) {
  resp =  (num * por) / 100
}
funcao (500, 25)
console.log(resp)

var soma = 0;
for(var i = 11; i <= 30; i += 2) {
 soma += i;
}
console.log(soma);


function conver (cel) {
  return far = cel * 1.8 + 32
}

console.log(conver(40))

let soma = 0

function somarArray (ar) {
 for (let i = 0; i < ar.length; i++) {
  soma = soma + ar[i];
 }
 return soma
}
let ar = [3, 5, 8, 15, 32, 18]
somarArray(ar)
console.log(soma)


function retornarPositivos(ar){
  let ar2 = [];
  for (var i = 0; i < ar.length; i++) {
  let el = ar[i];
  if (el >= 0) {
  ar2.push(el);
  }
  }
  return ar2;
 }
 let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
 let ar2 = retornarPositivos(ar); 
 console.log(ar2)


function fatorial (num) {
  for (let i = num; i > 0; i--) {
    fat = fat * i
  }

}

let fat = 1 
fatorial(5)
console.log(fat)


function aprovacao (n) {
  if (n >= 6 && n <= 10) console.log('aprovado')
  else if(n > 10) console.log('nota invalida')
  else if (n <=5 && n >= 3) console.log('recuperação')
  else console.log('reprovado')
}
provacao(8)


//Imprimir números de 1 a 10
for (let num = 0; num <= 10; num ++){
  console.log(num)
}

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  for (let i = 1; i <= num.length; i++) {
    console.log(i)
  }
 
  const lista = [10, 20 , 30, 40, 50]

for (let pos in lista){
  console.log(lista[pos])
}	


for (let i = 100; i >= 0; i--) {
  if (i % 2 === 1) console.log(i)
}

let fat = 1
function fatorial (n) {
  for(let c = n; c > 1; c--) {
    fat *= c
  } 
  return fat
}
console.log(fatorial(20))

function calc (a, b) {
  console.log (`A soma de ${a} e ${b} é igual a: ` + (a + b))
  console.log(`A subtração de ${a} e ${b} é igual a: ` + (a - b))
  console.log('A multiplocação de ' + a + ' e ' + b +' é igual a: ' + (a * b))
  console.log('A divisão de ' + a + ' e ' + b + ' é igual a: ' + (a / b))  
}
calc(10, 5)

function div (num) {
  if (num % 3 === 0) console.log(true)
  else console.log(false)
}
div(8)

function meses (nMes) {
  if (nMes === 1) console.log('Janeiro')
  else if (nMes === 2) console.log('Fevereiro')
  else if (nMes === 3) console.log('Março')
  else if (nMes === 4) console.log('Abril')
  else if (nMes === 5) console.log('Maio')
  else if (nMes === 6) console.log('Junho')
  else if (nMes === 7) console.log('Julho')
  else if (nMes === 8) console.log('Agosto')
  else if (nMes === 9) console.log('Setembro')
  else if (nMes === 10) console.log('Outubro')
  else if (nMes === 11) console.log('Novembro')
  else if (nMes === 12) console.log('Dezembro')
  else console.log('Numero do mes ivalido')
}
meses(8)


function maiorOuMenor (a, b) {
  if (a > b) console.log(`O valor ${a} é maior que o valor ${b}.`)
  else if (a === b) console.log(`O valor ${a} é igual ao valor ${b}.`)
  else if (b > a) console.log(`O valor ${a} é menor que o valor ${b}.`)
}
maiorOuMenor (15, 10)

for (let i = 0; i <= 10; i++) {
let mult = 8 * i
 console.log(`8 x ${i} = ${mult}`)
}


let mult = 0
function tabuada (n) {
  for (let i = 0; i <= 10; i++) {
    mult = n * i
    console.log(`${n} x ${i} = ${mult}`)
  }
}
for(let i = 0; i <= 10; i++){
  tabuada(i)
  console.log('///////////')
}

let soma = 0
for (let i = 0; i <= 10; i++){
  soma = soma + i
}
console.log(soma)

let fat = 1
  function fatorial(n) {
  for (let i = 1; i <= n; i++ ) {
    fat = fat * i
  }
  return fat
}
console.log(fatorial(10))


function terc () {
  console.log('finalizado')
}

function sec () {
  setTimeout(() => {
    console.log('dl em andmento')
  }, 2000)
  setTimeout(() => {
    terc()
  },5000)

}

function prim () {
  console.log('dl iniciado')
  sec()
}
prim()
*/

function downloadFinalizado () {
	return new Promise ((resolve, reject) => {
  	setTimeout (() => {
    	console.log ('02 - Download em andamento...')
		}, 2000)
    resolve()
  })
}


async function downloadIniciado () {
	console.log('01 - Download iniciado.')
  await downloadFinalizado()
 setTimeout (() => {
  console.log('03 - Download finalizado.')
 }, 5000)
}

downloadIniciado()