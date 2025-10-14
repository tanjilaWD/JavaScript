const pizzaSlice = ['Bread','Cheese','Veggie','BBQ','Meet'];
const selectedSlice = pizzaSlice.slice(1,4);
console.log(selectedSlice);
console.log(pizzaSlice);

const selectedSlices = pizzaSlice.slice(2);
console.log(selectedSlices);

const fullPizza = pizzaSlice.slice();
console.log(fullPizza);
//
const movies = ['Jaws','Rocky','Alien','Avatar','Coco','Up', 'It'];
const removed = movies.splice(2,3);
console.log(removed);
console.log(movies);
//
const numbers = [1,2,3,4,5,6,7,8,9,10];
const deleted = numbers.splice(3,3,99,100);
console.log(deleted);
console.log(numbers);