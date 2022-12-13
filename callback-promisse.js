
function upload () {
  return new Promise((resolve, regect) => {
    setTimeout(() => {
      console.log('02 - Download concluido')
      resolve()
    },5000)
  })
}

async function uploadDeFoto () {
  console.log('01 - Download iniciado')
  await upload()
  setTimeout (() => {
    console.log('03 - Operação finalizada')
  }, 1000)
}
uploadDeFoto()

/*
const URL = 'https://jsonplaceholder.typicode.com/users'

async function sistema () {
const resposta = await fetch(URL)
const data = await resposta.json()
const userPhone = data.map((Obj)  =>{
	return {
  id: Obj.id
	}
})
  console.log(userPhone)
}
sistema()

function download () {
  return new Promise ((resolve, regect) => {
    setTimeout(() => {
      console.log('02 - Enviando arquivo...')
        resolve()
    }, 2000)
  })
}
 
async function download2 () {
  console.log('01 - Inicio do envio...')
  await download()
  setTimeout (() => {
    console.log('03 - Fim da execução, arquivo enviado.')
  }, 5000)

}
download2()
*/

const array = ['vinicius, joao, carlos, jose, maria']

function nome (Obj) {
  array.forEach(() => {
    if (Obj === 'vinicius' || 'joao') console.log('verdadeiro')
    else console.log('falso')
  })
}
nome('joao')

