// function getUsers(callback) {
//     setTimeout(() => {
//       callback([
//         { username: 'john', email: 'john@test.com' },
//         { username: 'jane', email: 'jane@test.com' },
//       ]);
//     }, 1000);
//   }
  
   
//   function findUser(username) {
//     let returnedUser;
//     getUsers(function(users){
//         returnedUser = users.find((user) => user.username === username);
//         console.log(returnedUser);
//     });
//   }
//   findUser('john');

// function getUsers() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve([
//           { username: 'john', email: 'john@test.com' },
//           { username: 'jane', email: 'jane@test.com' },
//         ]);
//       }, 1000);
//     });
//   }
//  //const promise = getUsers();
//   getUsers().then(function(user){
//     console.log(user);
//   });


// let success = false;
// function getUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         resolve([
//           { username: 'john', email: 'john@test.com' },
//           { username: 'jane', email: 'jane@test.com' },
//         ]);
//       } else {
//         reject('Failed to the user list');
//       }
//     }, 1000);
//   });
// }
// getUsers().then(function(user){
//     console.log(user);
// },function(error){
//     console.log(error);
// })
// Simulating an API request that resolves with user data
// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//       const success = true; // Simulate success or failure
  
//       setTimeout(() => {
//         if (success) {
//           resolve({ id: 1, name: 'John' });
//         } else {
//           reject('API request failed');
//         }
//       }, 2000);
//     });
//   }
  
//   fetchUserData()
//   .then(user => {
//     // Handle the successful user data
//     console.log('User data:', user);
//   })
//   .catch(error => {
//     // Handle errors directly
//     console.error('Error:', error);
//   });

function generateNumber(num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num);
      }, 3 * 1000);
    });
  }
  
  generateNumber(10)
    .then((result) => {
      console.log(result);
      return generateNumber(result * 2);
    })
    .then((result) => {
      console.log(result);
      return generateNumber(result * 3);
    })
    .then((result) => console.log(result));
  
  
  