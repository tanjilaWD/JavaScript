let first;
console.log(first);
//
function second(a,b){
    const total = a + b;
}
console.log(second);
//
function third(a,b,c,d){
    console.log(a,b,c,d);
}
third(2,5);
//
function noNegative(a,b){
    if(a<0 || b<0){
        return;
    }
    return a + b;
}
console.log(noNegative(2,-5));
//
const fifth = {
    id:2, name:'ponchom',age:40
};
console.log(fifth.salary);
//
const sixth = [4,89,87,56,54];
console.log(sixth[51]);
//
const seventh = [8,9,7,6,4];
delete seventh [1];
console.log(seventh[1]);
//
