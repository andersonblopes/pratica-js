var nome = 'Helena de Souza Lopes'; // variável global
var capitalizar = function() {
	// nome é uma variável local à função capitalizar pois foi informado o var
	var nome = 'Helena de Souza Lopes'.toUpperCase();
}
capitalizar();
console.log('nome', nome);
var capitalizar2 = function() {
	nome = 'Helena de Souza Lopes'.toUpperCase();
}
capitalizar2();
console.log('nome2', nome);