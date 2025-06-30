// import * as util from "./util.js";
// console.log(util.apiKey);

// import { apiKey, abc as content } from "./util.js";
// console.log(content);
// console.log(apiKey);

// let userMessage = "Hello, World!"; // string
// console.log(userMessage);
// console.log(userMessage);

// console.log(10 / 5); // number
// console.log(10 / 0); // Infinity
// console.log(10 / "abc"); // NaN
// console.log("10" / "2"); // 5
// console.log("10" / 2); // 5
// console.log("10" / "2abc"); // NaN
// console.log("10" / "2abc" + 5); // NaN + 5 = NaN

// console.log(10 <= 10); // true
// console.log(10 < 10); // false
// console.log(10 >= 10); // true
// console.log(10 > 10); // false
// console.log(10 == 10); // true
// console.log(10 === 10); // true
// console.log(10 != 10); // false
// console.log(10 !== 10); // false

// function
function add(a = 0, b = 0) {
  return a + b;
}
console.log(add(10, 20)); // 30

// arrow function
const arrowFunctionAdd = (a, b) => {
  return a + b;
};
console.log(arrowFunctionAdd(10, 20)); // 30

// object
const user = {
  name: "Kauan",
  age: 25,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
  hobbies: ["reading", "coding", "gaming"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "Country",
  },
  getHobbies() {
    return this.hobbies.map((hobby) => `Hobby: ${hobby}`);
  },
}

// Accessing properties and methods of the user object
console.log(user.name); // Kauan
console.log(user.age); // 25
console.log(user.greet()); // Hello, my name is Kauan and I am 25 years old.
console.log(user.hobbies); // ["reading", "coding", "gaming"]
console.log(user.address); // { street: "123 Main St", city: "Anytown", country: "Country" }
console.log(user.getHobbies()); // ["Hobby: reading", "Hobby: coding", "Hobby: gaming"]
console.log(user.address.street); // 123 Main St
console.log(user.address.city); // Anytown
console.log(user.address.country); // Country
console.log(user.getHobbies().join(", ")); // Hobby: reading, Hobby: coding, Hobby: gaming
console.log(user.getHobbies().map((hobby) => hobby.toUpperCase()).join(", ")); // HOBBY: READING, HOBBY: CODING, HOBBY: GAMING

// Class definition and constructor
class User {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
const anotherUser = new User("John", 30);
anotherUser.greet(); // Hello, my name is John and I am 30 years old

// array
const hobbies = ["reading", "coding", "gaming"];
console.log(hobbies[0]);

// push
hobbies.push("cooking");
console.log(hobbies); // ["reading", "coding", "gaming", "cooking"]

// findIndex
const idx = hobbies.findIndex((item) => item === "coding");
console.log(idx); // 1

// using map and forEach
hobbies.map((item) => item + " is fun!")
       .forEach((item) => console.log(item));

// destructuring an array
const [firstName, lastName] = ["Kauan", "Manzato"];
console.log(`First Name: ${firstName}, Last Name: ${lastName}`); // First Name

// destructuring an object
const { name, city } = {
  name: "Kauan",
  age: 25,
  city: "Anytown"
};
console.log(`Name: ${name}, City: ${city}`); // Name: Kauan, City: Anytown

// spread operator
const numbers = [1, 2, 3];
const newNumbers = [4, 5, 6];
const combinedNumbers = [...numbers, ...newNumbers];
console.log(combinedNumbers); // [1, 2, 3, 4, 5, 6]

// control flow
function checkAge(age) {
  if (age >= 18) {
    console.log("You are an adult.");
  } else {
    console.log("You are a minor.");
  }
}
checkAge(17); // You are a minor.
checkAge(18); // You are an adult.
checkAge(20); // You are an adult.
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}
for (const number of combinedNumbers) {
  console.log(`Number: ${number}`);
}

// using functions as values
setTimeout(() => console.log("Timeout executed!"), 1000);
function delayedLog() {
  console.log("Timed out again!");
}
setTimeout(delayedLog, 1000);

// objects and arrays are reference types
const originalArray = [1, 2, 3];
const copiedArray = originalArray; // copied by reference
copiedArray.push(4);
console.log(originalArray); // [1, 2, 3, 4]