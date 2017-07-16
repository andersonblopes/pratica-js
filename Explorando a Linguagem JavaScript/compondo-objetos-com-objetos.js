var helena = {
	nome: 'helena',
	idade: 8,
	endereco: {
		logradouro: 'Rua A',
		numero: 109,
		complemento: 'Apto 101',
		bairro: 'Lagoa Redonda',
		cidade: 'Fortaleza',
		estado: 'CE'
	}
}

console.log(helena);
console.log('Cidade que o helena mora', helena.endereco.cidade);

helena.endereco.numero = 1305
console.log(helena);
console.log(helena.endereco.cep); // Undefined pois cep não existe no objeto endereço
helena.endereco.cep = '60.831-222'
console.log(helena.endereco.cep);
console.log('Estado', helena['endereco']['estado']); // Acesso dinâmico a atributos