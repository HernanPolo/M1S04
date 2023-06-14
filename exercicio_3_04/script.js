alert("exercicio Git Github")
var nome = prompt("Digite seu nome")
var idadeString = prompt("Digite sua idade")
var idade = Number(idadeString)
if (idade >= 18){
    alert(nome+", seja bem-vindo!") 
} else {
    alert(nome+",infelizmente ainda não tem idade para ingresar")
}