var menorNota = Math.min(3, 5, 1, 6, 10);
console.log('Menor nota', menorNota);

var maiorNota = Math.max(3, 5, 1, 6, 10);
console.log('Maior nota', maiorNota);

var temperatura = Math.round(22.4);
console.log('Temperatura', temperatura);

var valorAleatorio = Math.random();
console.log('valor aleatório', valorAleatorio);

var numero = valorAleatorio * 60;
console.log('número', numero);

var numeroMega = Math.floor(numero) + 1; //floor arredonda para baixo
console.log('número da mega', numeroMega);

// O exemplo abaixo não funciona:
Math.max([1, 2, 3]);
// Mas se você fizer assim:
Math.max.apply(null, [1, 2, 3, 9]);
// Funciona. Porque a função apply vai quebrar cada item do array em um parâmetro para o método max.

// Possibilitando fazer assim:
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

var meuArray = [1, 2, 35, 3, 9];
console.log(meuArray.max());// Retorna 35