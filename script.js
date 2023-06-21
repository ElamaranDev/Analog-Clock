setInterval(() => {
  setClock();
}, 1000);
const deg = 6;
const hourHand = document.querySelector("#hr");
const minuteHand = document.querySelector("#min");
const secondHand = document.querySelector("#sec");

function setClock() {
  let time = new Date();
  let hr = time.getHours() * 30;
  let min = time.getMinutes() * deg;
  let sec = time.getSeconds() * deg;

  hourHand.style.transform = `rotateZ(${hr + min / 12}deg)`;
  minuteHand.style.transform = `rotateZ(${min}deg)`;
  secondHand.style.transform = `rotateZ(${sec}deg)`;

}
setClock();