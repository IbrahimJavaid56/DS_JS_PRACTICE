
// console.log('Start of example 1')
// function download(url, callback) {
//     setTimeout(() => {
//         // script to download the picture here
//         console.log(`Downloading ${url} ...`);
//         // process the picture once it is completed
//         callback(url);

//     }, 1000);
// }
// //function process(picture){
//     //console.log(`Processing ${picture}`);
// //}
// let url = 'https://www.javascripttutorial.net/pic.jpg';
// //download(url,process)
// download(url, function(picture) {
//     console.log(`Processing ${picture}`);
// }); 


// console.log('Start of example 2')
// getCustomer(1,function(user){
//     console.log('Customer ',user)
// });

// function getCustomer(id,callback) {
//     setTimeout(function() {
//         callback({
//             fName : 'John',
//             lName : 'Doe'
//         });
//     }, 2000);  
//   }


// function getUsers() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 { username: 'john', email: 'john@test.com' },
//                 { username: 'jane', email: 'jane@test.com' },
//             ]);
//             reject('Error throwed')
//         }, 1000);
//     });
// }


// const promise = getUsers();
// // promise.then(user => {
// //     console.log(user)
// // });
// promise.catch(user => { console.log(user) })

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

// const promise = getUsers();

// promise.catch((error) => {
//   console.log(error);
// });