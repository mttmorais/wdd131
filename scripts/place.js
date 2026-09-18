
const temperature = 5;
const windSpeed = 10;

// add the temperature and windSpeed to the correct space in HTML
document.querySelector("#temperature").textContent = temperature + " °C";
document.querySelector("#windspeed").textContent = windSpeed + " km/h";

// function that calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    const windChill =
        13.12 +
        0.6215 *
        temperature -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temperature * Math.pow(windSpeed, 0.16);

    return windChill;
}

// calling the function calculateWindChill and set the conditions
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);

    document.querySelector("#windchill").textContent = windChill.toFixed(1) + " °C";
} else {
    document.querySelector("#windchill").textContent = "N/A";
}


// footer time of last modification

const short = document.querySelector("#lastModified");
const year = document.querySelector("#currentyear");

const today = new Date();

short.textContent = "Last Modified: " + document.lastModified;
year.textContent = today.getFullYear();