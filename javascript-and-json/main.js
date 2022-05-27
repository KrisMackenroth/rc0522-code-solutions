var array = [{
  isbn: '23453',
  title: 'Cool book',
  author: 'Bob Builder'
},
{
  isbn: '55555',
  title: 'Cooler book',
  author: 'Tod Howard'
},
{
  isbn: '11111',
  title: 'Not Cool book',
  author: 'Jason Bob'
}
];

console.log(array);
console.log('Array type: ' + typeof array);

var stringy = JSON.stringify(array);
console.log('Stringy Content: ' + stringy);

var jsonString = '{"Number id": "26523", "String name": "Bobby"}';

console.log('String Content:' + jsonString);
console.log('Type:' + typeof jsonString);

var obj = JSON.parse(jsonString);

console.log(obj);
