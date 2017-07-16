// function declaration
function somar(a, b) {
	console.log('Argumentos passados: ' , arguments);
	return a + b;
}

// function declaration são movidas pelo hoisting para executar primeiro(início do código.)
function subtrair(a, b) {
	console.log('Argumentos passados: ' , arguments);
	return a - b; //return não é obrigatório mas se omitido sempre retorna undefined
}

// function expression
var produto = function(a, b) {
	console.log('Argumentos passados: ' , arguments);
	return a * b;
}

// function expression não estão sujeitas ao hoisting para executar primeiro(início do código.)
var dividir = function(a, b) {
	console.log('Argumentos passados: ' , arguments);
	if(b != 0){
		return a / b;			
	}else{
		console.log('Não é possível dividir por zero.');
	}	
}

var soma = somar(2, 3);
console.log('2 + 3 =', soma);
console.log('typeof soma', typeof somar);//Função também é um tipo de dado

var subtrair = subtrair(6, 2);
console.log('6 - 2 =', subtrair);
console.log('typeof subtrair', typeof subtrair);

var multiplicado = produto(6, 6);
console.log('6 * 6 =', multiplicado);
console.log('typeof multiplicado', typeof produto);

var quociente = dividir(12, 2);
console.log('12 / 2 =', quociente);
console.log('typeof quociente', typeof dividir);