var percentualImposto = 0.15;
valorMercadoria= 100;
var totalImposto = valorMercadoria * percentualImposto;

console.log('Total imposto a pagar: ',totalImposto);

var valorMercadoria;

/* HOINSTING - O que acontece na prática: Todas as declarações de variáveis 
são movidas para o inicioo do arquivo:

1º: var percentualImposto, valorMercadoria, totalImposto;
2º: percentualImposto = 0.15;
3º: valorMercadoria= 100;
4º: totalImposto = valorMercadoria + percentualImposto;

5º: console.log('Total imposto a pagar: ',totalImposto);

A recomendação é que as variáveis sejam declaradas no início do arquivo.

*/