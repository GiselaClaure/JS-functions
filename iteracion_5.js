//Iteración #5: Calcular promedio de strings

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function mixedCalc(param) {
  let counter= 0
  for (let i = 0; i < param.length; i++) {
      if (typeof param[i]=== "number") {
          counter+= param[i] 
      }else{
          counter+=param[i].length
      }
  }
  return console.log(counter)
}
mixedCalc(mixedElements)