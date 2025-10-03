/*
function add(num1,num2){
    const result = num1 + num2;
    return result;
}
const sum = add(5,7);
console.log(sum);
*/

/*
function add(num1, num2){
    const result = num1 + num2;
    console.log(num1,num2,result);
    return result;
}
const sum = add(5);
console.log(sum);
*/

/*
function add(num1,num2 = 0){
    const result = num1 + num2;
    console.log(num1,num2,result);
    return result;
}
const sum = add(5);
console.log(sum);
*/

/*
function add(num1 = 0, num2 = 0){
    const result = num1 + num2;
    console.log(num1,num2,result);
    return result;
}
const sum = add();
console.log(sum);
const total = add(17,19);
console.log(total);
*/
//
function sumOfThree (a = 0, b = 0, c = 0){
    return a+b+c;
}
console.log(sumOfThree(5,10,15));
//
function depositMoney(amount = 50){
    return amount;
}
console.log(depositMoney(100));
console.log(depositMoney());
//
function userInfo(name = 'anonymous',income = 0){
    return{name,income};
}
console.log(userInfo('Tanjila',5000));
console.log(userInfo());
//
function squareNumber(num = 1){
    return num * num;
}
console.log(squareNumber(5));
console.log(squareNumber());
//
function productInfo(name = "Unknown product", price = 1){
    return{name,price};
}
console.log(productInfo('Laptop', 50000));
console.log(productInfo());
//
function favBook(name = 'JS book'){
    return name;
}
console.log(favBook('React Guide'));
console.log(favBook());
//
function totalPrice(price = 10, quantity = 1){
    return price * quantity;
}
console.log(totalPrice(100,5));
console.log(totalPrice());
//
function createArray(a=5,b=10,c=15){
    return [a,b,c];
}
console.log(createArray(2,4,6));
console.log(createArray());