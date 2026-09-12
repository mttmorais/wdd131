// select the DOM elements for output
const lastModified = document.querySelector("#lastModified");
const year = document.querySelector("#currentyear");

// use the date object
const today = new Date();

lastModified.textContent = document.lastModified;
year.textContent = today.getFullYear();

// set the hamButton function
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});