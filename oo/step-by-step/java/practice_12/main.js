const Klass = require('./klass');
const Person = require('./person');
const Teacher = require('./teacher');
const Student = require('./student');

let p1 = new Person('John', 21);
let p1Intro = p1.introduce();

let p2 = new Person('John', 21);
let p2Intro = p2.introduce();

let p3 = new Person('John', 21);
let p3Intro = p3.introduce();

let klass1 = new Klass(1);
let klass2 = new Klass(2);

let t1 = new Teacher('Alex', 30, [klass1, klass2]);
let t1Intro = t1.introduce();

let t2 = new Teacher('Bob', 26, []);
let t2Intro = t2.introduce();

let s1 = new Student('John', 22, klass1);
let s2 = new Student('Tom', 22, klass2);
klass1.assignLeader(s1);
klass1.assignLeader(s2);
let s1Intro = s1.introduce();
let s2Intro = s2.introduce();

let t1IsTeachingS1 = t1.isTeaching(s1);
let t2IsTeachingS1 = t2.isTeaching(s1);

console.log(p1Intro);
console.log(p2Intro);
console.log(p3Intro);
console.log(s1Intro);
console.log(s2Intro);
console.log(t1Intro);
console.log(t2Intro);
console.log(t1IsTeachingS1);
console.log(t2IsTeachingS1);

