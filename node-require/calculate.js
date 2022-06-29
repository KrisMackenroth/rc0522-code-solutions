const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const intProcess = parseInt(process.argv[2]);
const intProcessTwo = parseInt(process.argv[4]);

if (process.argv[3] === 'add') {
  console.log('result: ', add(intProcess, intProcessTwo));
} else if (process.argv[3] === 'subtract') {
  console.log('result: ', subtract(intProcess, intProcessTwo));
} else if (process.argv[3] === 'multiply') {
  console.log('result: ', multiply(intProcess, intProcessTwo));
} else if (process.argv[3] === 'divide') {
  console.log('result: ', divide(intProcess, intProcessTwo));
} else console.log('Invalid Operation');
