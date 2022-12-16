function Pessoa(nome, sobrenome){
  let pessoa = {
    nome,
    sobrenome 
  }
  pessoa.nomeCompleto = `${nome} ${sobrenome}`
  return pessoa
}

const PessoaA = Pessoa('Vinicius', 'dalvi')
const PessoaB = Pessoa('João', 'texte')
console.log(PessoaA)
console.log(PessoaB)