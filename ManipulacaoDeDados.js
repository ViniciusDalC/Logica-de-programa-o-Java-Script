const URL = 'https://jsonplaceholder.typicode.com/users'

async function cadastro () {
 const resposta = await fetch(URL)
 const dados = await resposta.json()
 //console.log(dados)
 let user
 	dados.forEach ((obj) => {
		if (obj.email === "Shanna@melissa.tv" )
    user = obj
 	})
  console.log(user.email)
}

cadastro()