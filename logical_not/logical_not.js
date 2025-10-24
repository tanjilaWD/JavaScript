const age = 20;
if(age >= 18){
    console.log("vote for the hot");
}else{
    console.log("You are not eligibke to vote");
}
//ternari operator
const Age = 18;
Age >= 18? console.log("Eligible") : console.log("Not Eligible");
//

let price = 500;
let isLeader = false;
if(isLeader === true){
    price = 0;
}else{
    price = price + 100;
}
console.log(price);
//ternari operator
price = isLeader === true ? 0 : price + 100;