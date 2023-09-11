// Get the current date
const currentDate = new Date();

// Define an array of weekdays
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Get the current day of the week as a number
const dayOfWeekNumber = currentDate.getDay();

// Get the name of the current day of the week
const dayOfWeekName = weekdays[dayOfWeekNumber];

// Get the HTML element to display the day of the week
const dayOfWeekElement = document.getElementById("currentDOW");

// Set the innerHTML of the element to display the day of the week
dayOfWeekElement.innerHTML = `${dayOfWeekName}`;

// Function to display UTC time
function displayUTCTime() {
  const currentUTCTime = Date.now();
  const utcTimeElement = document.getElementById("utcTime");
  utcTimeElement.innerHTML = `${currentUTCTime}`;
}

displayUTCTime();

setInterval(displayUTCTime, 1000);
