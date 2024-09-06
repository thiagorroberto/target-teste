// Questão 4

const faturamentoMensal = {
  SP: 67836.433,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

var soma = 0;

for (var estado in faturamentoMensal) {
  soma += faturamentoMensal[estado];
}

var faturamentoSP = ((faturamentoMensal.SP / soma) * 100).toFixed(2);
var faturamentoRJ = ((faturamentoMensal.RJ / soma) * 100).toFixed(2);
var faturamentoMG = ((faturamentoMensal.MG / soma) * 100).toFixed(2);
var faturamentoES = ((faturamentoMensal.ES / soma) * 100).toFixed(2);
var faturamentoOutros = ((faturamentoMensal.Outros / soma) * 100).toFixed(2);

console.log(
  `Faturamento em porcentagem: \n${faturamentoSP}%\n${faturamentoRJ}%\n${faturamentoMG}%\n${faturamentoES}%\n${faturamentoOutros}%`
);
