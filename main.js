let time = document.getElementById("time");
let greeting = document.getElementById("greeting");

const showTime = () => {
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let amPm = hours < 12 ? "AM" : "PM";

  hours = hours % 12 || 12;

  time.innerHTML = `${hours}:${addZero(minutes)}:${addZero(seconds)} ${amPm}`;

  setTimeout(showTime, 1000);
};

const addZero = (n) => {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
};

const setImageAndGreeting = () => {
  let today = new Date();
  let hours = today.getHours();

  if (hours < 12) {
    document.body.style.backgroundImage = "url(../images/morning.jpg)";
    document.body.style.backgroundSize = "cover";
    greeting.textContent = "Good Morning";
  } else if (hours >= 12 && hours < 18) {
    greeting.textContent = "Good Afternoon";
    document.body.style.backgroundImage = "url(../images/afternoon.jpg)";
    document.body.style.backgroundSize = "cover";
  } else {
    greeting.textContent = "Good Evening";
    document.body.style.backgroundImage = "url(../images/night.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.color = "white";
  }
};

showTime();
setImageAndGreeting();
