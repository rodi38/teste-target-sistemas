
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverseString(str) {
  let resultado = '';
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}

rl.question('Digite uma string para inverter: ', (entrada) => {
  const invertida = reverseString(entrada);
  console.log(`String invertida: ${invertida}`);
  rl.close();
});
