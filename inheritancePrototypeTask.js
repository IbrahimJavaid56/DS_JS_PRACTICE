let StudentDetails = [];
//Person Constructor Function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.intro = function () {
    return `My name is ${this.firstName} ${this.lastName}, and I am ${this.age} years old.`;
};
//Student Constructor function.
function Student(firstName,lastName,age,stdRollNum,ssn,courses) {
    Person.call(this,firstName,lastName,age)
    this.stdRollNum = stdRollNum;
    this.ssn = ssn,
    this.courses = courses;
};
// Set up the prototype inheritance
Student.prototype = Object.create(Person.prototype);
Student.prototype.assignCourse = function () {
    return `My Courses Enrolled ${this.courses}.`;
};
//student 1 Data
let student1 = new Student('M','Ali',20,180220,'2345',['PF','ALGO','DS']);
StudentDetails.push(student1);
console.log(student1.intro() + student1.assignCourse());
//student 2 Data
let student2 = new Student('Raja','Nouman',23,190220,'8989',['MATH','PHYSICS','CHINESE']);
StudentDetails.push(student2);
console.log(student2.intro() + student2.assignCourse());
//Student 3 Data
let student3 = new Student('Usama','Bro',19,200220,'4567',['Calculus','Linear Algebra','Discrete']);
StudentDetails.push(student3);
console.log(student3.intro() + student3.assignCourse()) ;
console.log(StudentDetails);
