//Iteración #4: Calcular el promedio

const numbers = [12, 21, 38, 5, 45, 37, 6];
const other = [4,5,12,288];

function average(list) {
  let numbersCounter = 0
  for (let i = 0; i < list.length; i++) {
      numbersCounter+=numbers[i]
  }
  return console.log(numbersCounter/list.length)
}

average(numbers);
average(other);