// LocalStorage
let reviewCount = localStorage.getItem("reviewCount");

if (reviewCount === null) {
    reviewCount = 1;
} else {
    reviewCount = Number(reviewCount) + 1;
}

localStorage.setItem("reviewCount", reviewCount);

const reviewCountElement = document.querySelector("#reviewCount");

reviewCountElement.textContent =
    `Thank You! You have submitted ${reviewCount} reviews.`;

// footer time of last modification

const lastModified = document.querySelector("#lastModified");
const year = document.querySelector("#currentyear");

const today = new Date();

lastModified.textContent = "Last Modified: " + document.lastModified;
year.textContent = today.getFullYear();