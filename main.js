let time = document.getElementById("time");
let greeting = document.getElementById("greeting");

const showTime = () => {
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let amPm = hours < 12 ? "AM" : "PM";

  hours = hours % 12 || 12;

  time.innerHTML = `${hours}:${minutes}:${addZero(seconds)}`;

  setTimeout(showTime, 1000);
};

const addZero = (n) => {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
};

showTime();
