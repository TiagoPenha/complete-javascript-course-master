/*Função de declaração*/
function suaProfissao(area, nome){
	switch(area){
		case 'professora':
			console.log('Você é uma professora');
			break;
		case 'designer':
			console.log('Você é um designer');
			break;
		default:
			console.log('Você é um estudante');
	}
}

/*Função de expressão*/
var qualSuaProfissao = function(area, nome){
	switch(area){
		case 'professora':
			return nome + ' Você é uma professora';
			break;
		case 'designer':
			return nome + ' Você é um designer';
			break;
		default:
			return nome + ' Você é um estudante';
	}
}

suaProfissao('carpinteiro', 'Marcos');
console.log(qualSuaProfissao('designer', 'Tiago'));
console.log(qualSuaProfissao('pedreiro', 'Carlos'));


/*Arrary*/
var nome = ['Tiago','Eva', 'Jose'];
var anoDeNascimento = new Array(1988, 1970, 1965);

//Métodos de Array
console.log(nome);
nome[nome.length] = 'Adriana';
console.log(nome);
//Adiciona elemento ao final do array
nome.push('Tassy');
console.log(nome);
//Adiciona elemento no inicio do array
nome.unshift('Familia:');
console.log(nome);
//Remove o elemento final do array
nome.pop();
console.log(nome);
//Remove o elemento do inicio do array
nome.shift();
console.log(nome);
//Retorna a posição que o elementro esta no array
console.log(nome.indexOf('Jose'));

var fazParteDaFamilia = nome.indexOf('Eva') === -1 ? 'Não pertence a familia' : 'Faz parte da familia';
console.log(fazParteDaFamilia);