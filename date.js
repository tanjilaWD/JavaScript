const now = new Date();
console.log(now);
//
const specificDate = new Date('2025-10-21');
console.log(specificDate);
//
const dateTime = new Date(2025,12,12,10,30,0);
console.log(dateTime);
//
const date1 = new Date('2028-11-01');
const date2 = new Date('2029-02-16');
const diffInMiliSeconds = date2 - date1;
const diffInDays = diffInMiliSeconds / (1000*60*60*24);
console.log(diffInDays);
//
const codeTime = new Date();
console.log(codeTime);
//
const nowDate = new Date(2035,6,15,14,45,30);
console.log(nowDate);
//
