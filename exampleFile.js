// exampleFile.js

function greet(name) {
    // Using single quotes for string
    console.log('Hello, ' + name + '!'); // Missing semicolon
}

greet('World');

const sum = (a, b) => {
    return a + b; // Missing semicolon
};

console.log('The sum of 2 and 3 is: ' + sum(2, 3)); // Missing semicolon

// An example of a multiline statement
const person = {
    name: 'Alice',
    age: 30
};

// Log the person's info
console.log(person);
