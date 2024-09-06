// Questão 3

fetch("./dados.json")
  .then((response) => response.json())
  .then((dados) => {
    var faturamento = dados.faturamento
      .filter((item) => item.valor != 0)
      .map((item) => item.valor);
    var valorMinimo = Math.min(...faturamento).toFixed(2);
    var valorMaximo = Math.max(...faturamento).toFixed(2);
    var somaDoFaturamento = faturamento.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    var media = (somaDoFaturamento / faturamento.length).toFixed(2);
    console.log(
      `Valor mínimo: ${valorMinimo}. \nValor máximo: ${valorMaximo}. \nMédia do faturamento: ${media} `
    );
  });
