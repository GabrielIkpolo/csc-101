
// Assign the html input elements to variables 
const fullname = document.querySelector('.fullname');
const profession = document.querySelector('.profession');
const submitBtn = document.querySelector('.submitBtn');

// Assign the response content elements to varibles 

const fullnameDisplayed = document.querySelector('.fullnameDisplayed');
const proffessionDisplayed = document.querySelector('.proffessionDisplayed');

submitBtn.addEventListener('click', ()=>{
    console.log(fullname);
    console.log(profession);

    console.log(fullnameDisplayed);
    console.log(proffessionDisplayed);

    fullnameDisplayed.textContent = fullname.value;
    proffessionDisplayed.textContent = profession.value;

});


window.addEventListener('load', ()=>{
    // alert("Welcome to About");
});