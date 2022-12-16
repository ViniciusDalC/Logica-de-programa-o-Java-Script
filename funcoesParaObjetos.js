
const pessoa = {
  nome: 'vinicius',
  sobrenome: 'dalvi'
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
[['nome', 'vinicius'], ['sobrenome', 'dalvi']]


const livros = {
  'livro A': 90.00,
  'livro B': 19.90,
  'livro C': 50.00
}

const valores = Object.values(livros)
const soma = valores.reduce((acc, val) =>  acc + val, 0)
console.log(soma)