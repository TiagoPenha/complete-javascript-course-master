/********************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body
Mass Index), which is calculated using the formula:
BMI = mass / height^2= mass / (height * height).
(mass in kg and height in meter).


1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information
about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable
from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK
*/

alert('Mark precisamos dos seus dados (Peso, Altura).Por favor informe os dados a seguir...');
var pesoMark = prompt('Quanto você pesa (kg):');
var alturaMark = prompt('Qual a sua altura em metros: ');
var centimetrosMark = prompt('Quantos centimetros');
var metrosMark = (alturaMark * 100 + parseInt(centimetrosMark)) / 100;
var imcMark = pesoMark / (metrosMark  * metrosMark);

alert('John precisamos dos seus dados (Peso, Altura).Por favor informe os dados a seguir...');
var pesoJohn = prompt('Quanto você pesa (kg):');
var alturaJohn = prompt('Qual a sua altura em metros: ');
var centimetrosJohn = prompt('Quantos centimetros');
var metrosJohn = (alturaJohn * 100 + parseInt(centimetrosJohn)) / 100;
var imcJohn = pesoJohn / (metrosJohn * metrosJohn);

var higherImcMark =  imcMark > imcJohn
console.log("Is Mark\'s BMI higher than John\'s? " + higherImcMark);

