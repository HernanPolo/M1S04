
alert('Bem-vindo a sua calculadora de massa corporal')
const peso = prompt('Digite seu peso em kg : ')
const altura= prompt ('Digite sua altura em mt:')
const massaCorporal= Number(peso) /( Number(altura) ** 2)
alert ('seu IMC é de :  '+ massaCorporal )