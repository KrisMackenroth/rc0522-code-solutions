/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var firstLastInitial = person.firstName[0] + person.lastName[0];
  return firstLastInitial;
}
