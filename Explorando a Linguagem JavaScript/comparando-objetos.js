var helena = {
	nome: 'Helena',
	idade: 8,
	email: 'helena@email.com',
	equals: function(obj) { // Como se fosse o equals do java
		return this.email === obj.email;
	}
}

var elaine = {
	nome: 'Elaine',
	idade: 28,
	email: 'elaine@email.com',
	equals: function(obj) { // Como se fosse o equals do java
		return this.email === obj.email;
	}
}

console.log(helena === elaine); //Não dá para utilizar === pois sempre será false
// Deve ser implementado o 
console.log('Helena e Elaine tem os mesmos e-mails?', helena.equals(elaine));