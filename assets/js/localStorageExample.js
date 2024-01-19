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
 * 
 * 
 * 
 * 
Introduction:
localStorage is a web storage API in JavaScript that allows web 
applications to store data persistently in a user's browser.
Unlike session storage, which is limited to a session, localStorage 
retains data even when the browser is closed and reopened. It is 
a key-value storage mechanism, where data is stored as strings.
LocalStorage can be used to store  

localStorage stores data as strings. If you want to store objects or
arrays, you need to serialize and deserialize them using JSON.stringify
and JSON.parse, respectively.

Eg:

const userData = { name: 'John', age: 25 };
localStorage.setItem('user', JSON.stringify(userData));

const storedUser = JSON.parse(localStorage.getItem('user'));


Capacity:
localStorage has a default storage limit of around 5 MB per domain. 
This is generally sufficient for storing small amounts of data, such 
as user preferences or authentication tokens.

Use Cases:
User Preferences: Storing user-specific settings and preferences.
Caching: Saving API responses or frequently used data to reduce server requests.
Authentication: Storing tokens or user information for persistent logins




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

