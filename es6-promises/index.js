const takeAChance = require('./take-a-chance');
const prom = takeAChance('Kris');

prom.then(value => {
  console.log(value);
});

prom.catch(error => {
  console.log(error.message);
});
