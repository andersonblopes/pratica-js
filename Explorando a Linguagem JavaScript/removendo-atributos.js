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
delete helena.idade;
console.log('->', helena);
delete helena['endereco'].estado; //Removendo dinamicamente
console.log('-->', helena);
delete helena.endereco; //Removendo atributo do tipo objeto
console.log('-->', helena);