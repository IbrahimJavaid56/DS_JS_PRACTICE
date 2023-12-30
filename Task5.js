

// const obj1 = {
//     name: 'Alice',
//     sayHello: () => {
//       console.log(`Hello, ${this.name}`);
//     }
//   };
// obj1.sayHello();// Output: Hello, undefined

// const obj2 = {
//     name: 'Alice',
//     sayHello: function() {
//       console.log(`Hello, ${this.name}`);
//     }
//   };
  
//   obj2.sayHello(); // Output: Hello, Alice

// const sum = function(x , y ){
//     return x + y;
// }

console.log('Start of Code');

//if you are making a object then by default ,writeble,enumerable and writable are set to true.
const user = {
    username : 'abc',
    password : '****'
};
console.log(user);
//if you are making the object using Object.defineProperty then you have to manually
//set value of writeble,enumerable and writable to true else they are false.
let person = {};

Object.defineProperty(person, 'ssn', {
    configurable: false,//set the object in locked state.
    enumerable: true,//to be set to true in order to make it iterable
    value: '012-38-9119'
});
//console.log(person);
Object.defineProperty(person, 'id', {
    configurable: true,//set the object in locked state.
    enumerable: true,//to be set to true in order to make it iterable
    value: '012-40-9119'
});
console.log(person);
//delete person.ssn;//no impact of this bcz of configurable is set to false.
console.log(person);
let descriptor1 = Object.getOwnPropertyDescriptor(person, 'id');

console.log(descriptor1);
let per = {
    firstName: 'John',
    lastName: 'Doe'
};

let descriptor = Object.getOwnPropertyDescriptor(per, 'firstName');

console.log(descriptor);
