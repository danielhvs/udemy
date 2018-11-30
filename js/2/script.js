function calculaTip(conta) {
  if(conta < 50) {
    return 0.2 * conta;
  } else if(conta >= 50 && conta <= 200) {
    return 0.15 * conta;
  } 
  return 0.1 * conta;
}

function calculaConta(conta) {
  return conta + calculaTip(conta);
}

var contas = [124, 48, 268];
var tips = contas.map(calculaTip);
var contasTotais = contas.map(calculaConta);

console.log(contas);
console.log(tips);
console.log(contasTotais);
