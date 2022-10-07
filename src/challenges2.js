// Desafio 11
function generatePhoneNumber(array) {
  const ddd = `${array[0]}${array[1]}`;
  const initNumber = `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  const findNumber = `${array[7]}${array[8]}${array[9]}${array[10]}`;
  if (array.length !== 11) return 'Array com tamanho incorreto.';
  if (array.map((e) => e < 0)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${ddd}) ${initNumber}-${findNumber}`;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// '(12) 34567-8901'

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
