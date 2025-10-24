const now = new Date();
console.log(now);
//
const specificDate = new Date('2025-05-20');
console.log(specificDate);
//
const dateTime = new Date(2025, 10, 12, 10, 30,0);
console.log(dateTime);
//
const date1 = new Date('2026-11-01');
const date2 = new Date('2029-02-16');
const diffInMiliSeconds = date2 - date1;
const diffInDays = diffInMiliSeconds / (1000*60*60*24);
console.log(diffInDays);
//

let Now = new Date();

let year = Now.getFullYear();
console.log('Year:', year);

let month = Now.getMonth();
console.log('Month:', month);

let date = Now.getDate();
console.log('Date:', date);

let day = Now.getDay();
console.log('Day:', day);

let hours = Now.getHours();
console.log('Hours:', hours);

let minutes = Now.getMinutes();
console.log('Minutes:', minutes);

let seconds = Now.getSeconds();
console.log('Seconds:',seconds);
