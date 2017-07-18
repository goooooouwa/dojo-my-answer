const Person = require('./person');

class Teacher extends Person{
  constructor(name, age, classes){
    super(name, age);
    this.klasses = classes;

    this.klasses.forEach((klass) => {
      klass.addTeacher(this);
    }, this);
  }
  handleStudentJoiningClass(student, klass){
    console.log(`I am ${this.name}. I know ${student.name} has joined Class ${klass.number}.`);
  }
  handleStudentBecomingLeader(student, klass){
    console.log(`I am ${this.name}. I know ${student.name} become Leader of Class ${klass.number}.`);
  }
  introduce(){
    if (this.klasses.length === 0){
      return `${super.introduce()} I am a Teacher. I teach No Class.`;
    } else {
      return `${super.introduce()} I am a Teacher. I teach Class ${this.klasses.map(function (klass) {
        return klass.number;
      }).join(', ')}.`;
    }
  }
  isTeaching(student){
    return this.klasses.some((klass) => {
      return klass.isIn(student);
    });
  }
}

module.exports = Teacher;