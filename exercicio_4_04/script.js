//[M1S04] Ex 4 - Cadastrar Aluno
/*Crie um objeto em JavaScript chamado "aluno" que tenha as propriedades
 "nome" e "idade". Em seguida, solicite ao usuário que digite o nome e a 
 idade de um aluno e armazene esses valores nas propriedades do objeto. 
Por fim, exiba na tela o nome e a idade do aluno cadastrado.*/ 


const aluno= {
   nome : prompt('Digite o nome do aluno'),
   idade : prompt('Digite a idade do aluno')
}
alert('O aluno '+ aluno.nome + ' de ' +aluno.idade+ ' anos, foi cadastrado com sucesso!')