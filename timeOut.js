// console.log(1);
// console.log(2);
// setTimeout(()=>{
// console.log(3)
// }, 4000);
// console.log(4);
// console.log(5);
// console.log(6);

//

// setInterval(()=>{
//     console.log('I M U')
// }, 1000)


// let num = 0;
// setInterval(()=>{
//     num++;
//     console.log(num);
// },1000)

//
// let num = 0;
// const intervalId = setInterval(()=>{
//     num++;
//     console.log(num);
//     if(num == 5){
//         clearInterval(intervalId)
//     }
// }, 1000)

//
// setTimeout(()=>{
//     console.log('I wasted 3 seconds of my life by looking at screen and doing nothing')
// }, 3000);

//
// let num = 131;
// setInterval(()=>{
//     num+=2;
//     console.log(num);
// }, 2000)

//
let text = 'I am learning javaScript';
const intervalId = setInterval(()=>{
    text++;
    console.log(text);
    if(text == 5)
        clearInterval(intervalId)
}, 2000)