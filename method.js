class player {
    constructor(name, runs, wickets){
        this.name = name;
        this.runs = runs;
        this.wickets = wickets;
    }
    getRun(){
        return this.runs;
    }
}
const player1 = new player('Tamim', 5000, 100);
const tamimRun = player1.getRun();
console.log(tamimRun);

//

class Player{
    constructor(name, runs, wickets){
        this.name = name;
        this.runs = runs;
        this.wickets = wickets;
    }
    addRun(run){
        this.runs = this.runs + run;
    }
}
const Player1 = new Player('Tamim', 60000, 100);
Player1.addRun(200);
Player1.addRun(31);
console.log(Player1);

//

class BankAccount{
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
        return this.balance;
    }
    withdraw(amount){
        if(this.balance >= amount ){
            this.balance -= amount;
            return amount;
        } else{
            return 'Insufficient Balance';
        }
    }
}
const myAccount = new BankAccount('Leo', 7000);
myAccount.deposit(2000);
myAccount.withdraw(500);
console.log(myAccount);

//

class Hotel{
  constructor(name, roomNo, pricePerNight){
    this.name = name;
    this.roomNo = roomNo;
    this.pricePerNight = pricePerNight;
  }
  getName(){
    return this.name;
  }
}
const myHotel = new Hotel('Blue Moon', 201, 1500);
console.log(myHotel.getName());

//

class Employee {
constructor(name, position, salary){
    this.name = name;
    this.position = position;
    this.salary = salary;
}
getSalary(){
    return this.salary;
}
}
const emp = new Employee('Tanjila', 'Developer', 40000);
console.log(emp.getSalary());

//

class Library{
    constructor(){
        this.books = [];
    }
    addBook(bookName){
        this.books.push(bookName);
    }
    hasBook(bookName){
        return this.books.includes(bookName);
    }
}
const myLibrary = new Library();
myLibrary.addBook('JavaScript Basics');
myLibrary.addBook('React Guide');
console.log(myLibrary.hasBook('JavaScript Basics'));
console.log(myLibrary.hasBook('python 101'));