let time = document.getElementById("time");
let greeting = document.getElementById("greeting");

const showTime = () => {
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let amPm = hours < 12 ? "AM" : "PM";

  hours = hours % 12 || 12;

  time.innerHTML = `${hours}:${minutes}:${seconds}`;

  setTimeout(showTime, 1000);
};

showTime();
