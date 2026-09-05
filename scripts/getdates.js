// select the DOM elements for output

const short = document.querySelector("#lastModified");
const year = document.querySelector("#currentyear");

// use the date object

const today = new Date();

const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "short"
}).format(today);

const time = new Intl.DateTimeFormat("en-US", {
    timeStyle: "medium"
}).format(today);

short.innerHTML = `Last Modification: <span class="highlight">${date} ${time}</span>`;

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;