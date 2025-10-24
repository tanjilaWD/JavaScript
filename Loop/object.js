const student = {
    name: 'Tanjila',
    age: 15,
    class:9,
    isSingle: false
};
console.log(student);
//
const subject = {
    name: 'biology',
    teacher: 'rasheda',
    examDate: '30 dec',
    chapters: ['first','second','third'],
    nextExam:{
        name: 'Final Exam',
        marks: 100
    }
}
console.log(subject);
//
const Teacher ={
    name: 'Tusher',
    subject: 'mern',
    age: 26,
    address:'Dhaka'
}
console.log(Teacher);
//
const tree ={
    name: 'banana',
    height: '5.3 inch',
    age: '5 month'
}
console.log(tree);
//
const person = {
    name: 'sodor uddain',
    age: 25,
    profession: 'developer',
    salary: 25000,
    marrid: true
};
console.log(person.profession);
//
const Person ={
    name: 'Tanjila Khatun',
    age: 25,
    profession: 'Developer',
    salary: 25000,
    married: false,
    'fav places': ['bandarbon', 'saintmartin', 'kualata'] 
};
console.log(Person['married']);
console.log(Person['fav places']);
console.log(Person);
//
const propertyName = 'profession';
console.log(person[propertyName]);
//
const cricketer ={
    position: 4,
    specialty: 'batter',
    age: 24,
    runs: 8000
};
console.log(cricketer.position);
console.log(cricketer['runs']);

cricketer.position = 1;
cricketer['runs'] = 9000;

console.log(cricketer['position']);
console.log(cricketer.runs);
//
const college ={
    name : 'vnc',
    class: ['11','12'],
    events:['science fair', 'bijoy dibos', '21 feb'],
    unique:{
        color: 'blue',
        results:{
            gpa: 5,
            merit: 'top'
        }
    }
};
console.log(college.unique.color);
console.log(college.unique.results.gpa);
console.log(college.events[2]);
//
const player = {
    name: 'Tamim',
    age: '34 years',
    sports: 'cricket',
    team: 'xyz'
};
console.log(player.team);
//
const laptop = {
    brand: 'Lenovo',
    price: '46k',
    hardDisc: 'zzz',
    ram: '4.00 GB',
    screenSize: '16 inch'
}
console.log(laptop.screenSize);
//
const favPlace = {
    name: "cox's Bazar",
    distance: "400km",
    popularty: "high"
};
console.log(favPlace['popularty']);
//
const phone = {
    brand: 'Nokia',
    color: 'black',
    price: '5000'
}
console.log(phone['price']);
//
const library ={
    name: 'Public Library',
    location: 'Dhaka',
    books: 5000
};
console.log(library.location);
//
const movie ={
      title: 'Inception',
      director: 'Nolan',
      rating: 9
};
console.log(movie['rating']);
//
const College ={
    name: 'ndc',
    established: 1949,
    groups: ['Science','Arts','Commerce']
};
console.log(College.groups[1]);
//
const family ={
    father:{
        name: 'Kabir Molla',
        age: 43 ,
        profession: 'xyz'
    },
    mother: {
        name: 'Shuly',
        age: 40 ,
        profession: 'housewife'
    }
};
console.log(family.mother.age);
console.log(family.father.age);
console.log()

let motherAge = family.mother.age;
console.log("Mother's Age:", motherAge);
let fatherAge = family.father.age;
console.log("Mother's Age:", fatherAge);
let totalAge = motherAge + fatherAge;
console.log('Total Age:', totalAge);

//
const computer = {
    brand: 'lenovo',
    price: 35000,
    processor: 'intel',
    ssd: '512gb'
};
const keys = Object.keys(computer);
console.log(keys);

const values = Object.values(computer);
console.log(values);
//
const profile = {
    name: 'Rahim',
    age: 28,
    city: 'Dhaka',
};
const profileKeys = Object.keys(profile);
const hasName = profileKeys.includes('name');
console.log(hasName);

if('email' in profile){
    console.log('email exists');
}else{
    console.log('No email. No spam')
}

if(profile.hasOwnProperty('email')){
    console.log('Email niya boroloki dekhai');
} else{
    console.log('Email Chara jibon');
}

if(profile.city === 'Dhaka'){
    console.log('Jam er sohor Dhaka.');
}else{
    console.log('Aram sob gram e.')
}
//
const perSon = {
    name: 'Alice',
    age: 25,
    country: 'Bangladesh'
};
const entries = Object.entries(perSon);
console.log(entries);
//
