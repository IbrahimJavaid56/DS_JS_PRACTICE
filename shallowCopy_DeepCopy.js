// // Get references to the HTML elements
// var dynamicText = document.getElementById("dynamicText");
// var changeButton = document.getElementById("changeButton");

// // Add an event listener to the button
// changeButton.addEventListener("click", function() {
//     // Change the text dynamically
//     dynamicText.textContent = "Text changed dynamically!";
// });

//let x = myFunction(4, 3);
// function myFunction() {
// // Function returns the product of a and b
//   return "return value";
// }
// console.log(myFunction());
// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
// Myname = person.fullName();
// console.log(Myname);


// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length);

// let text1 = "We are the so-called \'Vikings\' from the north.";

// console.log(text1);

// const userDetails = {
//     Myname: 'ibrahim',
//     age : 23,
//     email : "ibrahimjavaid56",
//     phoneNo : 23,
//     personalDetails:{
//         alphaId: 1,
//         bravo: 'abc',
//         pass: '123'
//     }
// }
// const clone = userDetails;
// //shallow copy
// // clone.Myname = 'umer';
// // console.log(userDetails.Myname);
// //shallow end

// //deep copy
// const clone1 = {...userDetails};
// clone1.personalDetails.alphaId = 2;
// console.log(clone1.personalDetails.alphaId);
// console.log(userDetails.personalDetails.alphaId);
// //deep copy --task to see how we can make deep copy out of it

const person = [
    {
        name: "Alice",
        age: 30,
        religion: "Islam",
        courses: [
            {
                title: "Science",
                pages: 50
            }, 
            {
                title: "Science-1",
                pages: 50,
                topics:[
                    "topic-1", "topic-2"
                ]
            } 
        ]
    },
    {
        name: "Bob",
        age: 40,
        religion: "Hindu",
        courses: [
            {
                title: "Biology",
                pages: 50
            }, 
            {
                title: "Biology-1",
                pages: 50,
                topics:[
                    "topic-1", "topic-2"
                ]
            } 
        ]
    },
    {
        name: "Ahmed",
        age: 50,
        religion: "Islam",
        courses: [
            {
                title: "Maths",
                pages: 50
            } ,
            {
                title: "Maths-1",
                pages: 50,
                topics:[
                    "topic-1", "topic-2"
                ]
            } 
        ]
    }
];

// const result = [];
// let desiredName = 'Ahmed'; // Define desiredName


// if (personWithDesiredName) 
// {
//   personWithDesiredName.courses.forEach(function (course, index) {
//     result.push(`Title ${index + 1}: ${course.title}`);
//   });
// }
// // course.topics.foreach(function(topic, t_index){
//     //     result.push(`Topic ${t_index + 1}-${t_index + 1}: ${topic}`)
//     // });
// console.log(result);
// console.log('end of code');

// ///////////
// const result = {};
// const desiredName = 'Ahmed'; // Define desiredName

// const personWithDesiredName = person.find(function (person) {
//   return person.name === desiredName;
// });

// if (personWithDesiredName) {
//   personWithDesiredName.courses.forEach(function (course, index) {
//     result[`Title ${index + 1}`] = course.title;
//   });

//   if (personWithDesiredName.courses[0].topics) {
//     personWithDesiredName.courses[0].topics.forEach(function (topic, t_index) {
//       result[`Topic ${t_index + 1}`] = topic;
//     });
//   }
// }
// //////////
// console.log(result);
// console.log('Start of Code');
// let desiredName = 'Ahmed';
// const personWithDesiredName = person.find(function (person) {
//     return person.name === desiredName;
//   });
//   console.log(personWithDesiredName);
// const transformedObject = {};

// personWithDesiredName.courses.forEach(function (course, index) {
//     transformedObject[`title ${index + 1}`] = course.title;
//     if (course.topics) {
//         course.topics.forEach(function (topic, t_index) {
//             transformedObject[`topic ${t_index + 1}`] = topic;
//         });
//     }
// });

// console.log(transformedObject);
// console.log('end of code');

console.log('Start of Code')

const arr = [1,2,3,5];
const arrFilter = arr.filter(function(item){
    return item % 2 === 0 
})
console.log(arrFilter)
console.log('End of Code')

