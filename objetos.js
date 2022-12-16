const pessoa = {
  nome: "Vinicius",
  idade: 28,
  casado: false,
  nota: [5, 8, 10], 
  endereco: {
    rua: 'rua xyz',
    numero: 10
  }
}

console.log(pessoa['nome'])
console.log(pessoa.nome)
console.log(pessoa['idade'])
console.log(pessoa.idade)
console.log(pessoa['casado'])
console.log(pessoa.casado)
console.log(pessoa['nota'][2])
console.log(pessoa.nota[2])
console.log(pessoa['endereco']['rua'])
console.log(pessoa.endereco.rua)