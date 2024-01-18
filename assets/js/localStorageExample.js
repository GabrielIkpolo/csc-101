localStorage.setItem('username', 'JohnDoe');
localStorage.setItem('isLoggedIn', 'true');

// Getting data from localStorage
const storedUsername = localStorage.getItem('username');
const isLoggedIn = localStorage.getItem('isLoggedIn');

// Displaying data
console.log('Stored Username:', storedUsername);
console.log('Is Logged In:', isLoggedIn);

// Updating data
localStorage.setItem('username', 'JaneDoe');

// Removing data
localStorage.removeItem('isLoggedIn');

// Clearing all data in localStorage
// localStorage.clear();


/**
LocalStorage can be used to store  

Strings: You can store plain text or serialized data as strings.

Numbers: Integer or floating-point numbers can be stored.

Booleans: true or false values can be stored.

Objects: JavaScript objects can be stored, but they need to be converted to strings using JSON.stringify before storing and JSON.parse when retrieving.

Arrays: Arrays can be stored using similar serialization techniques.

Images: Images can be stored by converting them to data URLs

 * 
 * 
 * 
 */

