
//let message = "There are 14 people in the room, we all are ready to learn new things,  sometimes our moral get down, but we are still hustling for learning. After 2 months, there will be change in our way of coding"
// Task-1
// Separate strings on (,) bases & put it in array
// Task-2:
// Separate the words in array starting with T
// Task-3:
// Find numbers in string
// Task-4:
// Find 'hustling' & 'learning' and merge them & make it 'hustling-learning' 

//Task-1 Start
// console.log('Start of Code');
// let message = "There are 14 people in the room, we all are ready to learn new things,  sometimes our moral get down, but we are still hustling for learning. After 2 months, there will be change in our way of coding";
// const messageSplitedByCommas = message.split(',');
// console.log(messageSplitedByCommas);
// console.log('End of Code');
//Task-1 End

// //Task-2 Start
// console.log('Start of Code');
// let message = "There are 14 people in the room, we all are ready to learn new things,  sometimes our moral get down, but we are still hustling for learning. After 2 months, there will be change in our way of coding";
// const messageStartingWithT = message.split(" ").filter(function(word) {
//     return word.startsWith("T");
//   });
  
// console.log(messageStartingWithT);

// console.log('End of code');
// //Task-2 End

//Task-3 Start
// console.log('Start of code')
// let message = "There are 14 people in the room, we all are ready to learn new things,  sometimes our moral get down, but we are still hustling for learning. After 2 months, there will be change in our way of coding"
// const messageWithNumbers = message.split(" ").filter(function(word) {
//     return word !== '' && !isNaN(word);
//   });
  
// console.log(messageWithNumbers);
// console.log('End of code');
//Task-3 End

//Task-4 Start
console.log('Start of code')
let message = "There are 14 people in the room, we all are ready to learn new things,  sometimes our moral get down, but we are still hustling for learning. After 2 months, there will be change in our way of coding."
// let word1 = message.match(/hustling/)
// let word2 = message.match(/learning/g)
// console.log(`${word1}-${word2}`);
const ms1 = message.split(" ").filter(function(word){
    return word.match(/hustling/) || word.match(/learning/)
});
console.log(ms1);
console.log('End of code')
