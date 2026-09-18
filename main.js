// Exercícios de fixação usando os conteúdos já vistos: prompt, alert, console, variáveis, operadores, if/else/else if, comparadores. Os exercícios são feitos em um arquivo HTML com um script conectado.
// Crie um programa que peça o nome do usuário e exiba uma saudação personalizada no console.
// Peça dois números ao usuário e exiba a soma, a subtração, a multiplicação e a divisão entre eles.
// Peça a idade do usuário e informe se ele é maior de idade ou menor de idade.
// Peça um número e informe se ele é par ou ímpar.
// Peça três números e informe qual é o maior entre eles.
// Peça a nota de um aluno e informe se ele foi aprovado, ficou em recuperação ou foi reprovado, considerando as faixas que você definir.
// Peça o preço de um produto e a quantidade desejada, calcule o valor total e aplique um desconto caso a quantidade seja maior que um valor definido por você.
// Peça dois números e um operador (+, -, *, /) digitado pelo usuário, e exiba o resultado da operação correspondente.
// Peça o ano de nascimento do usuário e calcule a idade aproximada, informando também se ele já pode tirar carteira de motorista.
// Peça a temperatura em graus Celsius e informe se está frio, ameno ou quente, considerando as faixas que você definir.
// Crie um arquivo index.html com uma tag script conectada a um main.js. Organize a lógica de um dos exercícios acima nesse main.js e exiba o resultado usando alert.
// Peça dois números ao usuário e informe se o primeiro é maior, menor ou igual ao segundo, usando os operadores de comparação.

let userName
let num_one
let num_two
let age
let num_three
let num_four
let num_five
let note
let product
let value
let amount
let num_six
let num_seven
let operator
let birthday
let temperature
let num_eight
let num_nine

userName = prompt("Qual é o seu nome?")
    console.log(`Olá ${userName}!`)

num_one = Number(prompt("Digite um número: "))
num_two = Number(prompt("Digite outro número: "))
    console.log(`${num_one} + ${num_two} = ${num_one + num_two}`)
    console.log(`${num_one} - ${num_two} = ${num_one - num_two}`)
    console.log(`${num_one} * ${num_two} = ${num_one * num_two}`)
    console.log(`${num_one} / ${num_two} = ${num_one / num_two}`)

age = Number(prompt("Quantos anos você tem?"))
    if (age >= 18) {
        console.log("Você é maior de idade.")
    } else {
        console.log("Você é menor de idade.")
    }

num_three = Number(prompt("Digite um número: "))
    if (num_three % 2 === 0) {
        console.log("Seu número é par.")
    } else {
        console.log("Seu número é ímpar")
    }

num_four = Number(prompt("Digite um número: "))
num_five = Number(prompt("Digite outro número: "))
num_six = Number(prompt("Digite outro número: "))
    console.log(`O maior número digitado foi: ${Math.max(num_four, num_five, num_six)}.`)

note = Number(prompt("Dê uma nota de 0-10 para um aluno: "))
    if (note >= 6) {
        console.log("Aprovado :)")
    } else if (note > 3) {
        console.log("Recuperação :|")
    } else {
        console.log("Reprovado :(")
    }

product = prompt("Informe o nome de um produto: ")
value = prompt("Informe o valor deste produto: ")
amount = Number(prompt(`Quantas unidades de ${product} você deseja?`))
    console.log(`O valor a ser pago é: ${value * amount}`)

num_six = Number(prompt("Digite um número: "))
num_seven = Number(prompt("Digite outro número: "))
operator = prompt("Insira um operador: (+ - * ou /)")
    console.log(`O valor do primeiro número ${operator} pelo segundo é: ${num_six} ${operator} ${num_seven}`)

birthday = prompt("Informe o ano em que você nasceu: ")
    if (birthday - 2026 >= 18) {
        console.log("Você pode tirar a carteira nacional de habilitação.")
    } else {
        console.log("Você não pode tirar a carteitra nacional de habilitação.")
    }

