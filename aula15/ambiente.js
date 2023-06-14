let num = [5,8,9]
num[3]=6
//num.push(7) //adicionar na ultima possicao
// num.length
//num.sort() //ordem crescente

console.log(`Nosso vetor é o ${num.length}`)

// for(let pos=0; pos<num.length; pos++){
//     console.log(num[pos])
// }

for(let pos in num){ //forma mais usada e resumida
    console.log(num[pos])
}

//num.indexOf(7)//verifica se tem o numero 7 no vetor