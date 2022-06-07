function ExampleConstructor() {

}

console.log('value of ExampleConstructor:', ExampleConstructor);

console.log('typeof ExampleConstructor:', typeof ExampleConstructor);

var newFunction = new ExampleConstructor();

var newInstance = newFunction instanceof ExampleConstructor;

console.log(newInstance);
