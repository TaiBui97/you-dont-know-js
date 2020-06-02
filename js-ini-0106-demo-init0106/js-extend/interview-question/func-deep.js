const emotions = ['cool', 'angry', 'sad']

function agforl(emotions) {
    let time = new Date().getFullYear();
    let agforlBehavior = `In ${time}, agforl is ${emotions}`;
    return agforlBehavior;
}
console.log(agforl([emotions[1]]));

function agforl_(time, emotions) {
    const agforlBehavior = `in ${time}, agforl's emotion - ${emotions}`
    return agforlBehavior;
}
const diffEmotions = {
    2019: 'cool',
    2014: 'sad',
    2020: 'angry'
}
const keys = Object.keys(diffEmotions);
console.log(agforl_(keys[2], diffEmotions[keys[2]]));
console.log(diffEmotions[2]);

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
var rand = new Person('Rand McKinnon', 33, 'M');
var ken = new Person('Ken Jones', 39, 'M');

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}
var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
var car2 = new Car('Nissan', '300ZX', 1992, ken);
console.log(car1);
console.log(car2);
console.log(car2.owner.name);

const myCar = {};
myCar.color = "red";
myCar[5] = "25mpg"
console.log(myCar[5]);
console.log(myCar[color]);