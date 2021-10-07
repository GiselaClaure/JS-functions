  /* Iteración #2: Buscar la palabra más larga */
  const avengers =['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
  function findLongestWord(param) {
    let longestWord= param[0];
    for (let index = 0; index < param.length; index++) {
    if (param[index].length > longestWord.length) { 
        longestWord=param[index]
    }
}
return console.log(longestWord)
}
findLongestWord(avengers)