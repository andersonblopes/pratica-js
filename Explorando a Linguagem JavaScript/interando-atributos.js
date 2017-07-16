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

for (var prop in helena) {
	console.log(prop, '->', helena[prop]);
}

for (var prop in helena) {
	if (prop === 'endereco' && helena[prop].bairro === 'Lagoa Redonda') {
		console.log('É na Lagoa Redonda');
	}
}