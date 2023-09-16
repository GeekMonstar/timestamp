const daysLayout = document.querySelector(".days");
const hoursLayout = document.querySelector(".hours");
const minutesLayout = document.querySelector(".minutes");
const secondsLayout = document.querySelector(".seconds");
const stampInTheDay = 86400;
let angle = 36;
let date = new Date("2024-08-14");
let targetTimestamp = date.getTime();
update();
setInterval(() => {
    update();
    angle += 10;
}, 500);
function update() {
    document.body.setAttribute("style", `background: linear-gradient(${angle}deg, #e96ca9, #5429fa)`);
    let duration = (targetTimestamp - Date.now()) / 1000;
    let daysLeft = Math.round(duration / stampInTheDay);
    let hours = Math.trunc((duration % stampInTheDay) / 3600);
    let minutes = Math.floor((duration / 60) % 60);
    let seconds = Math.trunc((duration % stampInTheDay) % 60);
    daysLayout.textContent = `${daysLeft}jour${daysLeft > 1 ? "s" : ""}`;
    hoursLayout.textContent = `${hours}heure${hours > 1 ? "s" : ""}`;
    minutesLayout.textContent = `${minutes >= 10 ? minutes : `0${minutes}`}minute${minutes > 1 ? "s" : ""}`;
    secondsLayout.textContent = `${seconds >= 10 ? seconds : `0${seconds}`}seconde${seconds > 1 ? "s" : ""}`;
}
