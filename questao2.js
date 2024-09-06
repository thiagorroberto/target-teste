// Questão 2

const fibonacci = (numero) => {
  var lista = [0, 1];
  var proximoValor = 0;

  while (numero > proximoValor) {
    proximoValor = lista[lista.length - 1] + lista[lista.length - 2];
    lista.push(proximoValor);
  }

  lista.includes(numero)
    ? console.log("Pertence")
    : console.log("Não pertence");
};

fibonacci(10);
