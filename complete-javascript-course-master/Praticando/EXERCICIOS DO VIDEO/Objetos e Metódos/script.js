var aluno = {

	nome: 'João Pedro',
	sobrenome: 'Matias',
	dataDeNascimento: 1982,
	sexo: 'Masculino',
	familia: ['Flavia', 'Otaviano', 'Priscila'],
	calculaIdade: function (){
		this.idade = 2019 - this.dataDeNascimento;
	}
}

aluno.calculaIdade();
console.log(aluno);