'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside a constructor function (below)
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New empty object is created {}
// 2. function is called, this = {}
// 3. {} is linked to prototype
// 4. function automatically returns {} from beginning

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);
const jay = 'Jay';

console.log(jonas instanceof Person);

console.log(jay instanceof Person);

// Constructor functions are not really a feature of Javascript, they are simply a pattern developed by other developers and others started using them.
