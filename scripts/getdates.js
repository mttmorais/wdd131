// select the DOM elements for output

const short = document.querySelector("#lastModified");
const year = document.querySelector("#currentyear");

// use the date object

const today = new Date();

short.textContent = document.lastModified;
year.textContent = today.getFullYear();