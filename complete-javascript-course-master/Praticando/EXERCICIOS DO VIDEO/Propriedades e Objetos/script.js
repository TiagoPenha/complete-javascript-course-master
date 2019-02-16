/*Propriedades e Objetos*/


//Objeto Literal

var aluno = {

	nome: 'Cezar',
	sobrenome: 'Danaber',
	dataDeAniversario: '12-05-1995',
	sexo: 'Masculino',
	familia: ['João Ricardo','Magnolia','Ana Luiza']
}

//Acessando as propriedades do objeto
//1 - Através do ponto '.'
console.log(aluno.nome);
console.log(aluno.familia);

//2 - Através do [] junto com a propridade ['dataDeAniversario']
console.log(aluno['dataDeAniversario']);

//3 - Através de variavel 
var x = 'sexo';
console.log(aluno[x]);

//Alterando o objeto
aluno.dataDeAniversario = '28-04-1992';
console.log(aluno);

//Outra forma de criar o objeto
var professora = new Object();
professora.nome = 'Rita';
professora.materia = 'Matematica';

console.log(professora.nome);
console.log(professora.materia);
