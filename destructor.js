/*
const pessoa = {
  nome: 'vinicius',
  sobrenome: 'Dalvi',
  idade: '28',
  senha: '123'
}

const {nome, idade, mes} = pessoa
  if (idade > 18) console.log('maior')
  else console.log('menor')

const pessoaAtt = {
  ...pessoa,
  idade: '30',
  senha: '456'
}
console.log(pessoa)


const livros = {
  titulo: 'uma historia',
  valor: 3.00,
  autor: 'mario'
}

const {titulo, valor, autor} = livros
if (titulo === 'uma historia' && valor ===30.00) console.log('livor certo')
else console.log('livro errado')
*/

const array = [10, 20, 30, 40]
console.log(array)

const newarray = [...array, 50]
console.log(newarray)

const [a, b] = newarray
console.log(a)