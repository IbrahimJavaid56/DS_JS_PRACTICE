function customerCallback(user) {
    console.log('Customer: ', user);
    getTopMovies(user.id, topMoviesCallback);
}
function topMoviesCallback(movies) {
    console.log('Top Movies: ', movies);
    sendEmail(user.email, movies, emailCallback);
}
function emailCallback(email) {
    console.log('Email Sent: ', email);
}
function getCustomerCallback(id) {
    return function(callback) {
        setTimeout(() => {
            callback({
                id: id,
                name: 'Raheel Safdar',
                isGold: true,
                email: 'email'
            });
        }, 4000);
    };
}
function getTopMoviesCallback(id) {
    return function(callback) {
        setTimeout(() => {
            callback(['movie1', 'movie2']);
        }, 5000);
    };
}
function sendEmailCallback(user, movies) {
    return function(callback) {
        setTimeout(() => {
            callback(true);
        }, 6000);
    };
}
console.log('Start');
const userCallback = getCustomerCallback(1);
console.log(userCallback());
// const moviesCallback = getTopMoviesCallback(userCallback().id);
// const sendEmailFunction = sendEmailCallback(userCallback().email, moviesCallback());
// userCallback(customerCallback);
