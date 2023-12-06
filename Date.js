function getTime() {

let currentYear = year();
let currentMonth = month();
let currentDay = day();
let currentHour = hour();
let currentMinute = minute();
let currentSecond = second();
  
currentDate = currentYear + '-' + nf(currentMonth, 2) + '-' + nf(currentDay, 2);
currentTime = currentHour + ':' + nf(currentMinute, 2) + ':' + nf(currentSecond, 2);

}
