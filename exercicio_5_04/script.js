// Peça ao usuário que digite três notas e seus respectivos pesos.
// Em seguida, escreva um programa em JavaScript que calcule a média 
// ponderada dessas notas. A média ponderada é calculada multiplicando 
// cada nota pelo seu peso correspondente, somando todos os resultados e 
// dividindo pelo somatório dos pesos.
// Exiba o resultado na tela.

var nota1= prompt("Digite a primeira nota")
var peso1= prompt("informe o peso dela")
var nota2= prompt("Digite a segunda nota")
var peso2= prompt("informe o peso dela")
var nota3= prompt("Digite a terceira nota")
var peso3= prompt("informe o peso dela")

var not1= Number(nota1)
var pes1= Number(peso1)
var not2= Number(nota2)
var pes2= Number(peso2)
var not3= Number(nota3)
var pes3= Number(peso3)

var mediapond = ((not1*pes1)+(not2*pes2)+(not3*pes3))/(pes1+pes2+pes3)
alert("a media ponderada é : " + mediapond+ " .")