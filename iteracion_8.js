//Iteration #8: Contador de repeticiones

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
      let wordCounter= {}
      for (let i = 0; i < param.length; i++) {
          if (param[i] in wordCounter) {
              wordCounter[param[i]]++;
          }else{
              wordCounter[param[i]]=1;
          }
      }
      return wordCounter
  }

  console.log(repeatCounter(counterWords));