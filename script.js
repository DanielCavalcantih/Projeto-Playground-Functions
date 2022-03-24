// Desafio 1
function compareTrue(value1, value2) {
    // seu código aqui 
    if (value1 === true && value2 === true) {
      return true;
    }
    return false;
  }
  
  // Desafio 2
  function calcArea(base, height) {
    // seu código aqui
    return base * height / 2;
  }
  
  // Desafio 3
  function splitSentence(text) {
    // seu código aqui
    return text.split(' ')
    //Neste código, precisei entender mais sobre a função .split.
    //Para isso, fui no link: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254 .
  }
  
  // Desafio 4
  function concatName(arrayString) {
    // seu código aqui
    let string1 = arrayString[arrayString.length - 1]
    let string2 = arrayString[0]
    return string1 + ', ' + string2
  }
  
  // Desafio 5
  function footballPoints(wins, ties) {
    // seu código aqui
    let pontos = 0;
    for (let index = 0; index < wins ; index += 1){
      pontos = wins * 3;
    }
    return pontos + ties;
  }
  
  // Desafio 6
  function highestCount(arrayNumbers) {
    // seu código aqui
    let highestNumbers = Math.max.apply(null, arrayNumbers);
    let count = 0;
    
    for (let index = 0 ; index < arrayNumbers.length ; index += 1){
      if (arrayNumbers[index] === highestNumbers) {
        count ++;
      }
    }
    return count;
  }
  
  // Desafio 7
  function catAndMouse(mouse, cat1, cat2) {
    // seu código aqui
    let distanceCat1 = Math.abs(cat1 - mouse);
    let distanceCat2 = Math.abs(cat2 - mouse);
  
    if(distanceCat1 < distanceCat2) {
      return 'cat1'
    } else if (distanceCat1 > distanceCat2){
      return 'cat2'
    }
    return 'os gatos trombam e o rato foge';
  }
  
  // Desafio 8
  function fizzBuzz(numbers) {
    // seu código aqui
    let resultado = [];
    for (let index = 0 ; index < numbers.length ; index += 1) {
      if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
        resultado.push('fizzBuzz')
      }
      else if (numbers[index] % 3 === 0) {
        resultado.push('fizz');
      }
      else if(numbers[index] % 5 === 0) {
        resultado.push('buzz');
      }
      
      else {
        resultado.push('bug!');
      }
    }
    return resultado;
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
  