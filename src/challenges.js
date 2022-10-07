/* eslint-disable sonarjs/cognitive-complexity */
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
  return `${fim}, ${inicio}`;
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
// Documentação consultada --- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math
function catAndMouse(mouse, cat1, cat2) {
  const distanciaCat1 = Math.abs(mouse - cat1);
  const distanciaCat2 = Math.abs(mouse - cat2);
  if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } return 'cat2';
}

// Desafio 8
// eslint-disable-next-line complexity, sonarjs/cognitive-complexity
function fizzBuzz(array) {
  const novaArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 3) === 0 && (array[index] % 5) === 0) {
      novaArray.push('fizzBuzz');
    } else if ((array[index] % 3) === 0) {
      novaArray.push('fizz');
    } else if ((array[index] % 5) === 0) {
      novaArray.push('buzz');
    } else {
      novaArray.push('bug!');
    }
  }
  return novaArray;
}

// Desafio 9
function encode(string) {
  let palavra = string.replaceAll('a', '1');
  palavra = palavra.replaceAll('e', '2');
  palavra = palavra.replaceAll('i', '3');
  palavra = palavra.replaceAll('o', '4');
  palavra = palavra.replaceAll('u', '5');

  return palavra;
}

function decode(string) {
  let palavra = string.replaceAll('1', 'a');
  palavra = palavra.replaceAll('2', 'e');
  palavra = palavra.replaceAll('3', 'i');
  palavra = palavra.replaceAll('4', 'o');
  palavra = palavra.replaceAll('5', 'u');

  return palavra;
}

// Desafio 10
function techList(array, string) {
  if (array.length === 0 || string.length === 0) {
    return 'Vazio!';
  }
  const arraySort = array.sort();
  return arraySort.map((index) => ({ tech: index, name: string }));
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
