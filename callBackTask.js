
function getCustomer(id,callback) {
    setTimeout(() => {
      callback({
        id: 1, 
        name: 'Raheel Safdar', 
        isGold: true, 
        email: 'email' 
    });
    }, 2000);  
  }
  function getTopMovies(id,callback1) {
    setTimeout(()=> {
        callback1(
            ['movie1', 'movie2']
        )
    },3000);
  }
  
  function sendEmail(user,movies,callback2) {
    setTimeout(()=>{
        callback2(true)
    },4000);
  }

//function explaining callback chaining
getCustomer(1, function (user) {
  console.log('Customer: ' , user);
  getTopMovies(user.id, function (movies) {
      console.log('Top Movies: ' ,movies);
      sendEmail(user.email,movies, function (email) {
          console.log('Email Sent:  ' , email);
      });
  });
});