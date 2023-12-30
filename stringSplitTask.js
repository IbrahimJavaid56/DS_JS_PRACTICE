function splitByComma(inputString) {
    const result = [];
    let substring = '';
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === ',') {
        result.push(substring);
        substring = '';
      } else {
        substring = substring + inputString[i];
      }
    }
    result.push(substring);
    return result;
  }
  
  const message = "There are 14 people in the room, we all are ready to learn new things, sometimes our morale gets down, but we are still hustling for learning. After 2 months, there will be a change in our way of coding.";
  
  const Finalresult = splitByComma(message);
  console.log(Finalresult);
  