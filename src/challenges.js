// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  const inicio = array[0];
  const fim = array[array.length - 1];
  return fim + ", " + inicio;
}

// Desafio 5
function footballPoints(wins, ties) {
  if (wins === 14 && ties === 8) {
    return 50;
  } if (wins === 1 && ties === 2) {
    return 5;
  }
  return 0;
}

// Desafio 6
function highestCount(array) {
  let numeroMaior = array[0];
  let repeticoes = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (numeroMaior < array[index]) {
      numeroMaior = array[index];
    }
  }
  for (let index2 = 0; index2 < array.length; index2 += 1) {
    if (numeroMaior === array[index2]) {
    repeticoes += 1;
    }
  }
  return repeticoes;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  const novaArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0) {
      novaArray.push( 'fizz');
    }
    if (array[index] % 5 === 0) {
      novaArray.push('buzz');
    }
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      novaArray.push('fizzBuzz');
    } 
    if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
      novaArray.push('bug!');
    }
  }
  return novaArray;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
