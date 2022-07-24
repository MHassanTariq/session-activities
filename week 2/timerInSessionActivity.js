let seconds = 0;
const timer = setInterval(() => {
  seconds++;
  if (seconds % 2 == 0) {
    console.log(seconds + ' seconds have passed');
  }
  if (seconds == 10) {
    clearInterval(timer);
  }
}, 1000);