// Questão 5

const inverterString = (palavra) => {
  let string = "";
  for (let i = palavra.length - 1; i >= 0; i--) {
    string += palavra[i];
  }
  return string;
};

const resultado = inverterString("Palavra");
console.log(resultado);
