// VARIÁVEIS COMPOSTAS = ARRAY (VETOR)

let num = [5, 8, 2, 9, 2]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições!`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)

let pos = num.indexOf(3)   // quando não encontrado no array, retorna -1
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
    

/*
num[5] = 6 // acrescentar um valor escolhendo o índice
num.push(1) // inserir elemento no final do array
num.length // length é um atributo e NÃO precisa de parênteses
num.sort() // ordena o array
*/

