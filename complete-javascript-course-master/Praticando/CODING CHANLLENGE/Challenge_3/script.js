/**************
* CODING CHALLENGE 3
*/

/*

John and his family went on a holiday and went to 3
different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John create a simple
tip calculator (as a function). He likes to tip 20%
of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply if with 20/100 = 0.2)

GOOD LUCK
*/

var contas = [124, 48, 268];
var valorGorgeta = [];
var valorFinal = [];
var gorgeta = 0;

for(var conta in contas){
	if(contas[conta] < 50){
		gorgeta = contas[conta] * 0.2;
		valorGorgeta.push(gorgeta.toFixed(2));
		valorFinal.push(contas[conta] + gorgeta);
	}
	else if(contas[conta] >= 50 && contas[conta] <= 200)
	{
		gorgeta = contas[conta] * 0.15;
		valorGorgeta.push(gorgeta.toFixed(2));
		valorFinal.push(contas[conta] + gorgeta);
	}
	else{
		gorgeta = contas[conta] * 0.1;
		valorGorgeta.push(gorgeta.toFixed(2));
		valorFinal.push(contas[conta] + gorgeta);
	}

}

console.log("Valores de Gorgeta: " + valorGorgeta);
console.log("Valor final: " + valorFinal);

//Ou pode ser feito desta forma

function porcentagemGorgeta(valorDaConta){
	var porcentagem;
	if(valorDaConta < 50){
		porcentagem = .2;
	}
	else if(valorDaConta >= 50 && valorDaConta <= 200){
		porcentagem = .15;
	}
	else{
		porcentagem = .1;
	}

	return porcentagem * valorDaConta;
}


var valorGorgeta = [porcentagemGorgeta(contas[0]), porcentagemGorgeta(contas[1]), porcentagemGorgeta(contas[2])];
var valorFinal = [valorGorgeta[0] + contas[0], valorGorgeta[1] + contas[1], valorGorgeta[2] + contas[2]];

console.log(valorGorgeta, valorFinal);
