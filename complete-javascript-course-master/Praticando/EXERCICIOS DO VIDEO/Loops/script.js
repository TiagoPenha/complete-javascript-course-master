//FOR

for(var i = 0; i <= 10; i++){
	console.log(i);
}

var familia = ['Tiago', 'Jose', 'Eva', 'Adriana', 2012, 'Tassiany', 1988, 2018, 'Franca'];
for(var i = 0; i < familia.length; i++){
	console.log(familia[i]);
}

//For and continue
for(var i = 0; i < familia.length; i++){
	if(typeof familia[i] !== 'string') continue;
	console.log(familia[i]);
}

//For and break
for(var i = 0; i < familia.length; i++){
	if(typeof familia[i] != 'string')break;
	console.log(familia[i]);
}

for(var i = familia.length; i >= 0; i--){
	console.log(familia[i]);
}
