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
