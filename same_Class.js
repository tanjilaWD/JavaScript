class player{
    constructor(){

    }
}
const mushi = new player();
console.log(mushi);

//

class players{
    constructor(name, runs, wickets){
        this.name = name;
        this.runs = runs;
        this.wickets = wickets;
    }
}
const tam = new players('Tam', 5000, 2);
console.log(tam);
const mash = new players('Mash', 3200, 180);
console.log(mash);
//

class FoodOrder{
    constructor(coustomer, food, price){
        this.vendoe = 'panda';
        this.coustomer = coustomer;
        this.food = food;
        this.price = price;
    }
}
const order1 = new FoodOrder('Mizan', 'pizza', 1500);
const order2 = new FoodOrder('Azim', 'Burger', 1000);
console.log(order1);
console.log(order2);