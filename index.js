// Funções

function sum(a, b) {
  return a + b
}

console.log(sum(1, 2)) // 3

const value = sum(4.5, 10.5)

console.log(value)

const sum2 = function(a, b) {
  return a + b
}

console.log(sum2(2, 2))

const sum3 = (a, b) => {
  return a + b
}

console.log(sum3(2, 5)) // 7

const sum4 = (a, b) => a + b

console.log(sum4(4, 5)) // 9

const greeting = (name) => `Hi, ${name}, what's up?`

console.log(greeting('Walmyr'))
console.log(greeting('Ricardo'))

const greeting2 = name => `Hi, ${name}, what's up?`

console.log(greeting2('Tamara'))

const olaMundo = () => 'Olá mundo!'

console.log(olaMundo())

// Condicionais

let entregueSemBugs = false

if (entregueSemBugs) {
  console.log('Woohoo!')
} else {
  console.log('Shame!')
}

function avaliaSprint(entregueSemBugs) {
  if (entregueSemBugs) {
    console.log('Woohoo!')
  } else {
    console.log('Shame!')
  }
}

avaliaSprint(entregueSemBugs)

entregueSemBugs = true

avaliaSprint(entregueSemBugs)

const sinaleira = 'verde'

if (sinaleira === 'verde') {
  console.log('Pode seguir.')
} else if (sinaleira === 'amarelo') {
  console.log('Atenção!')
} else {
  console.log('Pare!')
}

const expression = 'Papayas'
switch (expression) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.')
    break
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.')
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break
  default:
    console.log(`Sorry, we are out of ${expression}.`)
}

// Loops

function enfatizaPalavraNVezes(palavra, n) {
  let i = 0

  while (i < n) {
    console.log(`${palavra}!`)
    i++
  }
}

enfatizaPalavraNVezes('JavaScript', 5)
enfatizaPalavraNVezes('TypeScript', 3)

// Loops em arrays

const soboresDePizza = ['cogumelos', 'peperoni', 'quatro-queijos']

for (let i = 0; i < soboresDePizza.length; i++) {
  console.log(`Nhumy, pizza de ${soboresDePizza[i]}!`)
}

for (const pizza of soboresDePizza) {
  console.log(`Nhumy, pizza de ${pizza}!`)
}

// Iteradores

soboresDePizza.forEach(sabor => {
  console.log(`Nhumy, pizza de ${sabor}!`)
})

const pizzasSaborosas = soboresDePizza.map(sabor => `Pizza de ${sabor}`)

console.log(pizzasSaborosas)

const pizzasSemHifem = soboresDePizza.filter(sabor => !sabor.includes('-'))

console.log(pizzasSemHifem)

// reduce

const arrayOfNumbers = [1, 2, 3, 4, 5]

const sum5 = arrayOfNumbers.reduce(((previousValue, currentValue) => previousValue + currentValue))

console.log(`Sum of ${arrayOfNumbers} = ${sum5}`)

const reducer = (previousValue, currentValue) => previousValue + currentValue

const sum6 = arrayOfNumbers.reduce(reducer)

console.log(`Sum of ${arrayOfNumbers} = ${sum6}`)

const arrayOfString = ['a', 'b', 'c']

const minhaVariavel = arrayOfString.reduce(reducer)

console.log(minhaVariavel)

// Loops em objetos

const produto = {
  nome: 'iPhone 8',
  preco: 799,
  temGarantia: true
}

for (propriedade in produto) {
  if (typeof produto[propriedade] === 'number') {
    console.log(`${propriedade}: $${produto[propriedade]}`)  
  } else {
    console.log(`${propriedade}: ${produto[propriedade]}`)
  }
}

// Libs/modules/packages, require, module.exports

const meuModulo = require('./meuModulo')

meuModulo()
