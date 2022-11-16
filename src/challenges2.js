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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
