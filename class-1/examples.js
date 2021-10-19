{
    let baz = "Bazz";
    console.log(baz);
}
console.log(baz); // ReferenceError
var foo = "foo1";
var foo = "foo2"; // No problem, 'foo' is replaced.
let bar = "bar1";
let bar = "bar2"; // SyntaxError: Identifier 'bar' has already been declared
console.log(foo); // ReferenceError
let foo = "Foo";
console.log(foo); // Foo
// var string
let name = `name  ${firstName} ${surnameName}`
//if
if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

let accessAllowed = (age > 18) ? true : false;

//for with let
for(let i = 0; i < 10; i++) {
    // Do Stuff
}
// Iterates over the values of the array
let primes = [2, 3, 5, 7];
for(const value of primes) {
  console.log(value);
}
// 2
// 3
// 5
// 7

// Iterates over the keys of the array
let primes = [2, 3, 5, 7];
for(const key in primes) {
  console.log(key);
}
// '0'
// '1'
// '2'
// '3'

let sandwich = {
    grilled: true,
    butter: "lots",
    bread: "whole wheat",
    calories: 250
}

for(const value of sandwich) {
    console.log(value)
}
// Error: Objects are not iterable

for(const key in sandwich) {
    console.log(key)
}
// "grilled"
// "butter"
// "bread"
// "calories"

// spread operator doing the concat job 
let arr = [1,2,3]; 
let arr2 = [4,5]; 
arr = [...arr,...arr2]; 
console.log(arr); // [ 1, 2, 3, 4, 5 ] 
// with spread 
let arr = [1,2,3,-1]; 
console.log(Math.min(...arr)); //-1 
console.log(Math.max(...arr)); //3
//FIND
const trees = [
    { name: "birch", count: 4 },
    { name: "maple", count: 5 },
    { name: "oak", count: 2 }
];  
const result = trees.find(tree => tree.name === "oak");
//map
const officersIds = officers.map(officer => officer.id);
//reduce
const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);
// forEach
data.forEach(function (element) {
    var formatted = formatElement(element);
    results.push(formatted);
});
//class js
class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        alert(this.name);
    }
}
// Usage:
let user = new User("John");
user.sayHi();

