var num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num}`)

num[5]=6
console.log(`Agora entrou outro numero, a contagem vai ser ${num}`)

num.push(4)
console.log(`Adicionaram mais um indice na ultima posição`)
console.log(`Ficou assim ${num}`)
console.log(`A baixo teremos quantas posições o vetor atualmente tem`)
console.log(`O vetor tem ${num.length} posições`)
// num.sort()
var pos = num.indexOf(7)
if(pos == -1) {
    console.log(`O Valor não foi encontrado`)
} else {
    console.log(`O Valor 7 esta na posição ${pos}`)
}
