function fatorial (n) {
  if(n <= 2) return n
  return fatorial (n - 1) * n
}
const n = 5
const resposta = fatorial(n)
console.log(resposta )
