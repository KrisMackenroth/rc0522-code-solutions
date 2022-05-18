/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  }
  return false;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  }
  return false;
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  }
  return false;
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  }
  return false;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH > 14 || pH < 0) {
    return 'invalid pH level';
  } else if (pH > 7) {
    return 'base';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH < 7) {
    return 'acid';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "we're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else return 'Goodnight everybody!';
}
