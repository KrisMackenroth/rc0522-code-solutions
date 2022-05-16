var student = {
  firstName: 'Kris',
  lastName: 'Mackenroth',
  age: 23
};

var fullName = student.firstName + ' ' + student.lastName;

console.log(fullName);

student.livesInIrvine = true;

student.previousOccupation = 'Guard';

console.log(student.livesInIrvine);

console.log(student.previousOccupation);

var vehicle = {
  make: 'Honda',

  model: 'Accord',

  year: 2006
};

vehicle['color'] = 'red';

vehicle['isConvertible'] = false;

console.log(vehicle['color']);

console.log(vehicle['isConvertible']);

console.log(vehicle);

var pet = {
  name: 'sonic',

  type: 'cat'
};

delete pet.name;

delete pet.type;

console.log(pet);
