
function customerFunction(user) {
    console.log('Customer: ' , user);
    getTopMovies(user.id, TopMoviesFunction);
  }
  function TopMoviesFunction(movies) {
    console.log('Top Movies: ' ,movies);
    sendEmail(movies.email, movies, emailFunction);
  }
  
  function emailFunction(email) {
    console.log('Email Sent:  ' , email);
  }
  function getCustomer(id, callback) {
    setTimeout(() => {
      callback({
        id: 1,
        name: 'Raheel Safdar',
        isGold: true,
        email: 'email'
      });
    }, 2000);
  }
    
  function getTopMovies(id, callback1) {
    setTimeout(() => {
      callback1(
        ['movie1', 'movie2']
      );
    }, 2500);
}
  function sendEmail(user, movies, callback2) {
    setTimeout(() => {
      callback2(true);
    }, 3000);
  }

//function calling
getCustomer(1, customerFunction);