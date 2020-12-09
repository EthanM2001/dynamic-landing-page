let time = document.getElementById("time");
let greeting = document.getElementById("greeting");
let bottomLeft = document.getElementById("bottom-left");
let bottomRight = document.getElementById("bottom-right");

const getUserLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let longitude = position.coords.longitude;
    longitude = Math.round(longitude);
    let latitude = position.coords.latitude;
    latitude = Math.round(latitude);
    let apiKey = "a0f5ebe9dcdf4301c052f393f0ccb485";
    let url = "https://api.openweathermap.org/data/2.5/weather";
    fetch(`${url}?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let temp = data.main.temp;
        let celsius = Math.round(temp - 273.15) + "℃";
        let town = data.name;
        let weather = data.weather[0].main;
        let country = data.sys.country;
        bottomLeft.innerHTML = town + ", " + country;
        bottomRight.innerHTML = celsius + ", " + weather;
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

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
    document.body.style.backgroundSize = "100% 100%";
    greeting.textContent = "Good Morning";
  } else if (hours >= 12 && hours < 18) {
    greeting.textContent = "Good Afternoon";
    document.body.style.backgroundImage = "url(../images/afternoon.jpg)";
    document.body.style.backgroundSize = "100% 100%";
  } else {
    greeting.textContent = "Good Evening";
    document.body.style.backgroundImage = "url(../images/night.jpg)";
    document.body.style.backgroundSize = "100% 100%";
    document.body.style.color = "white";
  }
};

showTime();
setImageAndGreeting();
getUserLocation();
