/*

1) Crie uma função para verificar se uma palavra é palíndromo

Palíndromo: Diz-se de ou frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa.

Exemplos:

1. Ana
2. ovo
3. arara
4. Reinier
5. aibofobia

*/



const checarPalindromo = (palavra) => {
  const pMinusculo = palavra.toLowerCase() // .tpLowerCase = deixa todas as letras minusculas.
  const pArray = pMinusculo.split('').reverse() // .split = separa as letras do array.
  
  const verificacao = pArray.join('') === pMinusculo // junta as letras. 
  return verificacao
  }
  
  console.log(checarPalindromo('ana'))
  console.log(checarPalindromo('Reinier'))
  console.log(checarPalindromo('aibofobia'))