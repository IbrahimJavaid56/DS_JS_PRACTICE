
console.log('Start of code')
let message = "There are 14 people 26 in the room, we all are ready to learn new things,  sometimes our moral get down, but we are still hustling for learning. After 2 months, there will be change in our way of coding"
const messageWithNumbers = message.split(" ").filter(function(word) {
    return word !== '' && !isNaN(word);
  });
  
console.log(messageWithNumbers);
console.log('End of code');