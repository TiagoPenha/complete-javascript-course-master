/************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark
and John compared their BMIs. Let's now implement
the same functionality with objects and methods.

1. For each of them, create an object with
properties for their full name, mass, and height
2. Then, add a method to each object to calculate
the BMI. Save the BMI to the object and also return
it from the method.
3. In the end, log to the console who has the
highest BMI, together with the full name and the
respective BMI. Don't forget they might have the 
same BMI.

Remember: BMI = mass / height^2 = mass / (height * 
height). (mass in kg and height in meter).


GOOD LUCK
*/

var mark = {

	nome: 'Mark',
	peso: 70,
	altura: 1,
	centimetros: 88,
	calculaImc: function (){
		var alturaMetros = (this.altura * 100 + parseInt(this.centimetros)) / 100;
		this.imc = this.peso / (alturaMetros * alturaMetros);
		return this.imc.toFixed(2);
	}
}

var john = {

	nome: 'John',
	peso: 70,
	altura: 1,
	centimetros: 97,
	calculaImc: function (){
		var alturaMetros = (this.altura * 100 + parseInt(this.centimetros)) / 100;
		this.imc = this.peso / (alturaMetros * alturaMetros);
		return this.imc.toFixed();
	}
}

mark.calculaImc()
john.calculaImc()

if(mark.imc > john.imc){
	console.log('O Imc do mark é maior do que o do John');
}
else if(john.imc > mark.imc){
	console.log('O imc do john é mairo do que o do Mark');
}
else{
	console.log('Os imc\'s são iguais');
}