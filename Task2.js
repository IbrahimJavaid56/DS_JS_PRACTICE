
console.log('Start of Code');
let message = "There are 14 people in the room, we all are ready to learn new things,  sometimes our moral get down, but we are still hustling for learning. After 2 months, there will be change in our way of coding";
const messageStartingWithT = message.split(" ").filter(function(word) {
    return word.startsWith("T");
  });
  
console.log(messageStartingWithT);

console.log('End of code');
