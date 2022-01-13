console.log('\n Trabalhando com condicionais')

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`)

const idadeComprador = 14
const estaAcompanhada = true
let temPassagemComprada = false
const destino = 'São Paulo'

console.log('\nDestinos Possíveis')
console.log(listaDeDestinos)

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true

let contador = 0
let destinoExiste = false

while (contador < listaDeDestinos.length) {
  if (listaDeDestinos[contador] == destino) {
    destinoExiste = true
    break
  }

  contador += 1
}

for (let cont = 0; cont < listaDeDestinos.length; cont++) {
  if (listaDeDestinos[contador] == destino) {
    destinoExiste = true
    break
  }
}

console.log('Destino Existe', destinoExiste)

if (podeComprar && destinoExiste) {
  console.log('Boa viagem !')
} else {
  console.log('Desculpe, tivemos um erro')
}
