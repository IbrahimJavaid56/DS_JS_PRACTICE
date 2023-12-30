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

console.log('Start of Code');
let desiredName = 'Ahmed';
const personWithDesiredName = person.find(function (person) {
    return person.name === desiredName;
  });
//console.log(personWithDesiredName);
//console.log(typeof(personWithDesiredName));
const transformedObject = {};

personWithDesiredName.courses.forEach(function (course, index) {
    transformedObject[`title ${index + 1}`] = course.title;
    //console.log(course.topics);
    if (course.topics) {//here we have used truthy/falsy value.
        course.topics.forEach(function (topic, t_index) {
            transformedObject[`topic ${t_index + 1}`] = topic;
        });
    }
});

console.log(transformedObject);
console.log('end of code');
