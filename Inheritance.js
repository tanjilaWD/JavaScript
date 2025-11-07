
class Gadget {
    constructor(brand, model, price){
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}
class laptop extends Gadget{
    constructor(brand, model, price, keyboardLight){
        super(brand, model,price);
        this.keyboardLight = keyboardLight;
    }
}

const myLaptop = new laptop('Dell', 'XPS 15', 1500, true);
console.log(myLaptop.brand);
console.log(myLaptop.model);
console.log(myLaptop.price);
console.log(myLaptop.keyboardLight);

//

class phone extends Gadget{
    constructor(brand,model,price, hasFaceUnlock){
        super(brand,model,price);
        this.hasFaceUnlock = hasFaceUnlock;
    }
}
const myPhone = new phone('Apple', 'iPhone 14', 999, true);
console.log(myPhone.brand);
console.log(myPhone.hasFaceUnlock);

//

class Tablet extends Gadget{
    constructor(brand, model,price, hasPen){
        super(brand,model,price);
        this.hasPen = hasPen;
    }
}
const myTablet = new Tablet('Samsung', 'Galaxy', 700, true);
console.log(myTablet.brand);
console.log(myTablet.hasPen);

/////

class parent {
    constructor(name){
        this.name = name;
    }
}
class Child extends parent{
     constructor(name, age){
        super(name);
        this.age = age;
     }
}
const child = new Child('Tanjila', 21);
console.log(child.name);
console.log(child.age);
//

class Vehicle{
    constructor(brand, model, wheels){
        this.brand = brand;
        this.model = model;
        this.wheels = wheels;
    }
}
class Bus extends Vehicle{
    constructor(brand, model, wheels,seats){
        super(brand, model, wheels);
        this.seats = seats;
    }
}
class Truck extends Vehicle{
    constructor(brand, model, wheels, capacity){
        super(brand, model, wheels);
        this.capacity = capacity;
    }
}

class Bike extends Vehicle{
    constructor(brand, model, wheels, type){
        super(brand, model, wheels);
        this.type = type;
    }
}
const myBus = new Bus('Tata', 'Volvo', 6, 50);
const myTruck = new Truck('Ashok Leyland', 'Heavy', 8, '10 Ton');
const myBike = new Bike('Yamaha', 'R15', 2, 'Sports');
console.log(myBus);
console.log(myTruck);
console.log(myBike);

//


