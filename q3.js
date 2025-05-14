const fs = require(`fs`);

const dados = JSON.parse(fs.readFileSync('faturamento.json', 'utf8'))

const diasFaturamento = dados.filter(d => d.value > 0)

const menorDia = diasFaturamento.reduce((min, d) => d.value < min.value ? d : min);
const maiorDia = diasFaturamento.reduce((max, d) => d.value > max.value ? d : max);
const soma = diasFaturamento.reduce((sum, d) => sum + d.value, 0);

const media = soma / diasFaturamento.length;



const diasAcimaMedia = diasFaturamento.filter(d => d.value > media);

console.log("Média mensal: ", media.toFixed(2));
console.log("Dia com menor valor de faturamento: Dia", menorDia.day, "com R$", menorDia.value.toFixed(2));
console.log("Dia com maior valor de faturamento: Dia", maiorDia.day, "com R$", maiorDia.value.toFixed(2));
console.log("Número de dias com valor de faturamento acima da média: ", diasAcimaMedia.length);
console.log("Dias com faturamento superior à média mensal: ", diasAcimaMedia.map(d => d.day));



