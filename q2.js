const readline = require("node:readline");


const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isFibbonacci = (number) => {
  if (number < 0 || !Number.isInteger(number))
    return "Não pertence a sequencia fibonacci.";

  if (number === 0 || number === 1) return "Pertence a sequencia fibonacci.";

  let a = 0,
    b = 1;

  while (b <= number) {
    let next = a + b;
    if (b === number) return "Pertence a sequencia fibonacci.";
    a = b;
    b = next;
  }
  return "Não pertence a sequencia fibonacci.";
};

input.question("Digite um numero: ", (number) => {
  console.log(isFibbonacci(Number(number)));
  input.close();
});
