/****************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89,
120 and 103 points, while Mike's team scored 116,94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console.
Also incluide the average score in the output.
3. Then change the scores to show different winners.
Dont't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK
*/

var mediaTeamJohn = calculaMedia(89, 120, 103);
var mediaTeamMike = calculaMedia(116, 94, 123);
var mediaTeamMary = calculaMedia(97, 134, 105);

if(mediaTeamJohn > mediaTeamMike && mediaTeamJohn > mediaTeamMary){
	console.log("O time do John tem maior média de pontuação total de: " + mediaTeamJohn.toFixed(2) + " pontos!");
}
else if(mediaTeamMary > mediaTeamMike){
	console.log("O time da Mary tem maior média de pontuação total de: " + mediaTeamMary.toFixed(2) + " pontos!");
}
else if(mediaTeamJohn === mediaTeamMike && mediaTeamJohn === mediaTeamMary){
	console.log("A média de pontuação entrea as equipes são iguais: Team John: " + mediaTeamJohn.toFixed(2) + " Team Mike: " + mediaTeamMike.toFixed(2) + " Team Mary: " + mediaTeamMary.toFixed(2));
}
else{
	console.log("O time do Mike tem maior média de pontuação total de : " + mediaTeamMike.toFixed(2) + " pontos!");	
}

function calculaMedia(n1, n2, n3){
	var valor = (n1 + n2 + n3) / 3;
	return valor;
}
