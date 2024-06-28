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
console.log(`A ordem crescente é ${num.sort()}`)

for (var pos = 0;  pos < num.length ; pos + 1 ){
    console.log(`Contando ${pos}`)
}