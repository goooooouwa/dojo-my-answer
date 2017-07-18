class Klass{
  constructor(number){
    this.students = [];
    this.teachers = [];
    this.number = number;
  }
  assignLeader(student){
    if (this.students.indexOf(student) !== -1){
      this.leader = student;

      this.teachers.forEach((teacher) => {
        teacher.handleStudentBecomingLeader(student, this);
      }, this);
    } else {
      console.log("It is not one of us.");
    }
  }
  addTeacher(teacher){
    this.teachers.push(teacher);
  }
  appendMember(student){
    this.students.push(student);

    this.teachers.forEach((teacher) => {
      teacher.handleStudentJoiningClass(student, this);
    }, this);
  }
  isIn(student){
    return (this.students.indexOf(student) !== -1);
  }
}

module.exports = Klass;