let personCount = 0;

class Person{
  constructor(name, age){
    this.id = ++personCount;
    this.name = name;
    this.age = age;
  }
  introduce(){
    return `My ID is ${this.id}. My name is ${this.name}. I am ${this.age} years old.`;
  }
}

module.exports = Person;