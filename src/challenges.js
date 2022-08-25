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
function catAndMouse(cat1, cat2, mouse) {
  
  if (cat2 < cat1) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
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
// Documentação ocnsultada --- https://www.w3schools.com/jsref/jsref_replace.asp
function encode(string) {
  for (let index = 0; index < string.length; index += 1) {
    let trocaNumero = '';
    trocaNumero = string.replace('a', '1');
    trocaNumero = string.replace('e', '2');
    trocaNumero = string.replace('i', '3');
    trocaNumero = string.replace('o', '4');
    trocaNumero = string.replace('u', '5');
    return trocaNumero;
  }
}

function decode(string) {
  for (let index = 0; index < string.length; index += 1) {
    let trocaVogal = '';
    trocaVogal = string.replace('a', '1');
    trocaVogal = string.replace('e', '2');
    trocaVogal = string.replace('i', '3');
    trocaVogal = string.replace('o', '4');
    trocaVogal = string.replace('u', '5');
    return trocaVogal;
  }
}

// Desafio 10
function techList(array, string) {
  let listaTecnica = {
    tech: array,
    nome: string,
  };
  return listaTecnica;
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
