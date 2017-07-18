const Person = require('./person');

class Student extends Person {
  constructor(name, age, klass){
    super(name, age);
    this.klass = klass;

    this.klass.appendMember(this);
  }
  introduce(){
    if (typeof this.klass === 'undefined') {
      return false;
    }

    if ((typeof this.klass.leader !== 'undefined') && (this.klass.leader === this)) {
      return `${super.introduce()} I am a Student. I am leader of Class ${this.klass.number}.`
    } else {
      return `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`
    }
  }
}

module.exports = Student;