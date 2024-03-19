
const username = document.querySelector('.username');
const password = document.querySelector('.password');
const submit = document.querySelector(".submit");


const theUser = "abc";
const theP = "password123"

submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Username=======>", username.value);
    console.log("Password=========>", password.value);

    if(!(username.value===theUser && password.value ===theP)){
      console.log("Invalid credentials");
        alert("Invalid credentials");
        return;
    }

    window.location.href ='/pages/about.html';
});

window.addEventListener('load', () => {

});