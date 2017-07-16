var y;
console.log(y);

var x = null;
console.log(x);

/* === compara variáveis considerando o tipo*/
console.log(y === x);// Retorna false pois são de tipos diferentes
console.log(5 == '5'); //Retorna true pois não considera os tipos e o js faz o cast
console.log(5 === '5'); //Retorna false pois são de tipos diferentes

var z;
if (z != null) { //z é convertido(cast) para null
	console.log('Existe um valor em z:', x); // != é o mesmo que ==
} else {
	console.log('z não tem um valor útil');
}

var k = null;
if (k != undefined) { //z é convertido(cast) para undefined
	console.log('Existe um valor em k:', x);
} else {
	console.log('k não tem um valor útil');
}