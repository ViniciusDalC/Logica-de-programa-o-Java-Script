/*
let num = 0

while (num <= 10){
  console.log(num)
  num = num + 2
}

num = 0 
do {
  console.log(num)
  num = num + 2
} while (num <= 10)

for (i = 0; i <= 10; i = i + 1) {
  console.log(i)
}

for (let num = 100; num <= 200; num = num + 2){
  console.log(num)
}
*/

let num = 0
let alunos = 6
let nota = 10
while (num < alunos ) {
  if (nota >= 6 && nota <= 10) console.log('Aprovado.')
  else if (nota >= 11) console.log('Nota invalida.')
  else console.log('Aluno Reprovado.')
  num = num + 1
}

