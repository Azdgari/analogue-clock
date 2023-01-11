const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const handMovement = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  console.log(now);
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  const minutes = now.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

  const hour = now.getHours();
  const hourDegree = (hour / 60) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
};

const tick = () => {
  setInterval(handMovement, 1000);
};

tick();
