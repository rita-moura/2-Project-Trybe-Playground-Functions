// Desafio 11
function generatePhoneNumber(array) {
  const verifyLength = array.length < 11 || array.length > 11;
  const varifyNumbers = array.some((number) => number < 0 || number > 9);
  const repeat = [];
  array.forEach((e) => {
    repeat[e] = (repeat[e] || 0) + 1;
  });
  const verify = repeat.some((number) => number >= 3);

  if (verifyLength) return 'Array com tamanho incorreto.';

  if (varifyNumbers || verify) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let numberPhone = '(xx) xxxxx-xxxx';
  array.forEach((item) => {
    numberPhone = numberPhone.replace('x', item);
  });
  return numberPhone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const verifySum = (Math.abs(lineA) < (lineB + lineC)
    && Math.abs(lineB) < (lineA + lineC)
    && Math.abs(lineC) < (lineA + lineB));
  return verifySum;
}

// Desafio 13
function hydrate(string) {
  const regex = /\d+/g;
  const number = string.match(regex);
  let sumNumber = 0;
  for (let index = 0; index < number.length; index += 1) {
    sumNumber += Number(number[index]);
  }
  if (sumNumber === 1) return `${sumNumber} copo de água`;
  return `${sumNumber} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
