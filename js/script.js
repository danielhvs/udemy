// tipos de dados: 5  -> numero, string, undefined, null e bool
// coercao de tipos automatico
// === identico == usa coercao
// tem ternario: var eh = booleano ? sim : nao;
var numero = 3;
var array = ['string', 3, undefined, null, false]
console.log('array', array)
//array[5] = 'oi'; da pra fazer isso!
array.push('blue');
console.log('push', array)
array.unshift('Mr.'); // prepend
console.log('unshift', array)
array.pop();
console.log('pop', array) // remove ultimo
array.shift(); // remove primeiro
console.log('shift', array)
console.log('indexof nao tem', array.indexOf('Mr.'));
console.log('indexof tem', array.indexOf(3));
console.log('indexof tem', array.indexOf('3')); // nao faz coerce
