const daysLayout = document.querySelector(".days");
const hoursLayout = document.querySelector(".hours");
const minutesLayout = document.querySelector(".minutes");
const secondsLayout = document.querySelector(".seconds");
const dateLayout = document.querySelector(".date");
const stampInTheDay = 86400;
let angle = Math.random() * 36;
const year = new Date().getFullYear();
console.log(new Date().getFullYear());
let date = null;
let dateString = "";
if (new Date(`${year}-08-14`) > new Date()) {
    date = new Date(`${year}-08-14`);
    dateString = `14/08/${year}`;
}
else {
    date = new Date(`${year + 1}-08-14`);
    dateString = `14/08/${year + 1}`;
}
let targetTimestamp = date.getTime();
dateLayout.textContent = dateString;
console.log(date);
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
    daysLayout.textContent = `${daysLeft} jour${daysLeft > 1 ? "s" : ""}`;
    hoursLayout.textContent = `${hours} heure${hours > 1 ? "s" : ""}`;
    minutesLayout.textContent = `${minutes >= 10 ? minutes : `0${minutes}`} minute${minutes > 1 ? "s" : ""}`;
    secondsLayout.textContent = `${seconds >= 10 ? seconds : `0${seconds}`} seconde${seconds > 1 ? "s" : ""}`;
}
