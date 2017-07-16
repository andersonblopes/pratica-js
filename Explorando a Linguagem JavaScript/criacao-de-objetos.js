var fox = { cor: 'prata', modelo: 'Fox', fabricante: 'VW' }

console.log('fox', fox);
console.log(typeof fox);

console.log('Cor do fox:', fox.cor); 
// pintando o fox
fox.cor = 'Branco'; // Acesso à propriedade
console.log('Fox depois de pintado', fox);
console.log('Modelo:', fox['modelo']); // Acesso à propriedade através de uma string (dinâmica)

fox.peso = 1100; // Adicionando propriedade ao aobjeto
console.log(fox);
console.log('Potência', fox.potencia); // Retorna undefined pois atributo não existe

// Adicionando atributo do ttipo function
fox.ligar = function() { 
	console.log('Ligando o carro!'); 
};
console.log(fox);
// Chamando atributo do tipo function
fox.ligar();

//Criando outro objeto
var celta = {
	cor: 'branco',
	modelo: 'celta',
	fabricante: 'GM',
	ligar: function() {
		console.log('Ligando o carro');
	}
};
console.log('celta', celta);