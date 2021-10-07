//Iteración #7: Buscador de nombres

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param, nameToCompare) {
    for (let i = 0; i < param.length; i++) {
        if (nameToCompare === param[i]) {
           return console.log (true)
        }
    }
    return console.log(false)
  }
  finderName(nameFinder, 'Gisela')
