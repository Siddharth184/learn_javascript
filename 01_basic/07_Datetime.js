//  Dates

const now = new Date();
console.log(now.toString())//Thu Sep 12 2024 18:32:50 GMT+0530 (India Standard Time)
console.log(now.toLocaleString())//9/12/2024, 6:32:50 PM
console.log(now.toDateString())//Thu Sep 12 2024
console.log(now.toTimeString())//18:32:50 GMT+0530 (India Standard Time)
console.log(now.getMonth()); //8
console.log(now.getDay()); //4

console.log( typeof now);//object

let createMydate = new Date(2024, 0, 12);
console.log( createMydate.toDateString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);//1726147536033 in ms
console.log(createMydate.getTime());//1704997800000 in ms
console.log(Math.floor(Date.now()/1000));//1726147850 in second







