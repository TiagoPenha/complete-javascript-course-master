/***********
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create
a more advanced version using everything we learned!

This time, John and his family went to 5 different
restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less
than $50, 15% when the bill is betwen $50 and $200, and 10% if the bill is more than $200.

Implement a tip calcaulator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over
all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amouts (bill + tip). HINT: Start with two empty arrays [] as properties and the fill them up int the loop


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills
were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is
less than $100, 10% when the bill is between $100
and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK
*/

var john = {

	nome: 'John',
	familia: ['Beatriz','Lorenzo','Julia'],
	restaurantes: [124, 48, 268, 180, 42],
	valorGorgetas: [],
	valorFinal: [],
	calculaGorgeta: function(){
		var gorgeta = 0;
		for (var i = 0; i < this.restaurantes.length; i++) {
			if(this.restaurantes[i] < 50){
				gorgeta = this.restaurantes[i] * .2;
			}
			else if(this.restaurantes[i] >= 50 && this.restaurantes[i] < 200){
				gorgeta = this.restaurantes[i] * .15;	
			}
			else{
				gorgeta = this.restaurantes[i] * .1;
			}

			this.valorGorgetas.push(gorgeta);
			this.valorFinal.push(this.restaurantes[i] + gorgeta);			
		}			
	}

}

john.calculaGorgeta();
console.log(john);

var mark = {

	nome : 'Mark Gbyi',
	familia: ['Joana', 'Petros', 'Guil'],
	restaurantes: [77, 375, 110, 45],
	valorGorgetas: [],
	valorFinal: [],
	calculaGorgeta: function (){	
		for (var i = 0; i < this.restaurantes.length; i++) {
			
			var gorgeta;
			var conta = this.restaurantes[i];

			if(conta < 100){
				gorgeta = conta * .2;
			}
			else if(conta >= 100 && conta < 300){
				gorgeta = conta * .1;
			}
			else{
				gorgeta = conta * .25;
			}

			this.valorGorgetas.push(gorgeta);
			this.valorFinal.push(conta + gorgeta);
		}
	}
}

mark.calculaGorgeta();
console.log(mark);

function calculaMedia(gorgetas){
	var media = 0;
	for (var i = 0; i < gorgetas.length; i++) {
		media += gorgetas[i];
	}	

	return media / gorgetas.length;;
}

mark.media = calculaMedia(mark.valorGorgetas);
john.media = calculaMedia(john.valorGorgetas)

if(mark.media > john.media){
	console.log('A média de gorgeta de Mark é maior que a média do John');
}
else{
	console.log('A média de gorgeta de John é maior que a média do Mark');	
}

