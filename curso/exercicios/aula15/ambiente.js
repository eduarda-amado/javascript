let num = [5, 8, 2, 9, 3]

//adiciona o número 1
num.push(1)
//coloca em ordem 
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
//descobre onde o número está
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encoontrado!')
} else {
console.log(`O valor 8 está na posição ${pos}`)
}