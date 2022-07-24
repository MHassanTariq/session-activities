// setTimeout(() => {
//     console.log("Drink water");
// }, 3000);

const timerId = setInterval(() => {
    console.log("Drink water");
    clearInterval(timerId);
}, 3000);