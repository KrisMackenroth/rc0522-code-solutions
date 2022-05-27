/* exported titleCase */
function titleCase(title) {
  var newString = '';
  var lowerCase = title.toLowerCase();
  var split = lowerCase.split(' ');

  for (var i = 0; i < split.length; i++) {
    if (split[i].includes(':') === true) {
      var tempSplit = split[i].split(':');
      if (tempSplit[0] === 'javascript') {
        tempSplit[0] = 'JavaScript';
      }
      var wordAfter = split[i + 1][0].toUpperCase() + split[i + 1].slice(1);
      split[i + 1] = wordAfter;
      for (var k = 0; k < tempSplit.length; k++) {
        tempSplit[0] = tempSplit[0][0].toUpperCase() + tempSplit[0].slice(1);
        split[i] = tempSplit.join(':');
      }
    }
    if (split[i].includes('-') === true) {
      var newSplit = split[i].split('-');
      for (var j = 0; j < newSplit.length; j++) {
        newSplit[j] = newSplit[j][0].toUpperCase() + newSplit[j].slice(1);
        split[i] = newSplit.join('-');
      }
    } else if (split[i] === 'javascript' || split[i] === 'Javascript') {
      split[i] = 'JavaScript';
    } else if (split[i] === 'api') {
      split[i] = 'API';
    } else if (split[i].length === 1 && split[i] !== 'a') {
      split[i] = split[i].toUpperCase();
    } else if (split[0] === 'the') {
      split[0] = 'The';
    } else if (split[i].length > 1 && split[i] !== 'in' && split[i] !== 'for' && split[i] !== 'the' && split[i] !== 'of' && split[i] !== 'to' && split[i] !== 'and' && split[i] !== 'on') {
      split[i] = split[i][0].toUpperCase() + split[i].slice(1);
    }

  }
  newString = split.join(' ');
  return newString;
}
