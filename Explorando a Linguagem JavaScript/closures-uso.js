var incrementar = (function() {
	var valor = 0;
	return function() {
		return ++valor;
	}
})();

console.log(incrementar());
console.log(incrementar());
console.log(incrementar());

var incrementar2 = (function(){
	var valor =  0;
	console.log("valor dentro da function incrementar 2() ->", valor);
	return function () {
		console.log("valor dentro da function() dentro do incrementar 2() ->", valor);
		return ++valor;
	}
})();

console.log("output", incrementar2());
console.log("output", incrementar2());
console.log("output", incrementar2());



/*Exemplo 1 */
var calculaPreco = function (quantidade, preco ) {
	var quantidade = quantidade;
	var preco = preco;
	
	return function () {
		return quantidade * preco;
	}();
};
console.log(calculaPreco(5,100.50));


/*Exemplo 2 */
var calculaPreco = function (quantidade, preco ) {
	var quantidade = quantidade;
	var preco = preco;
	
	return function () {
		return quantidade * preco;
	};
};
console.log(calculaPreco(5,100.50)());


/*Exemplo 3 */
var calculaPreco = function () {
	var quantidade = 5;
	var preco = 100.5;
	var valorTotal = quantidade * preco;
	
	return function () {
		return valorTotal;	
	}();
}();
console.log(calculaPreco);


/*Exemplo 4 */
var calculaPreco = function () {
	var quantidade = 5;
	var preco = 100.5;
	var valorTotal = quantidade * preco;
	
	return function () {
		return valorTotal;	
	};
}();
console.log(calculaPreco());


/*Exemplo 5 */
var calculaPreco = function () {
	var quantidade = 5;
	var preco = 100.5;
	var valorTotal = quantidade * preco;
	
	return function () {
		return valorTotal;	
	}();
};
console.log(calculaPreco());