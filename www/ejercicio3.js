'use strict';

const names = ["Juan", "Marina", "Manolo", "Alex", "Ignacio", "Maria", "Miguel"];
const ages = [18, 13, 14, 17, 22, 34, 55];
const gender = ["hombre", "mujer", "hombre", "hombre", "hombre", "mujer", "hombre"];
const subject = ["Maths", "Biology"];
const groups = ["A", "B"];
const students = [];
const teachers = [];

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    propierties() {
        alert(`${name} tiene ${age} años y es ${gender}`);
    }
}

class Student extends Person {
    constructor(name, age, gender, subject, group) {
        super(name, age, gender);
        this.subject = subject;
        this.group = group;
    }

    static newList() {
        for (let i = 0; i < names.length; i++) {
            students.push(new Student(names[i], ages[i], gender[i], subject[Math.round(Math.random() * (1 - 0))], groups[Math.round(Math.random() * (1 - 0))]))
        }
    }
}

class Teacher extends Person {
    constructor(name, age, gender, subject, group, studentsList) {
        super(name, age, gender);
        this.subject = subject;
        this.group = group;
        this.studentsList = studentsList;
    }

    static listTeachers() {
        teachers.push(new Teacher("Ramon", 23, "hombre", "Maths", "B", students));
        teachers.push(new Teacher("Emma", 25, "mujer", "Biology", "B", students));
        teachers.push(new Teacher("Manuel", 43, "hombre", "Maths", "A", students));
    }

    asign() {
        this.studentsList = this.studentsList.filter(student => {
            return (student.group === this.group && student.subject === this.subject);
        });
    }

}

Teacher.listTeachers();
Student.newList();
console.log(students);
for (let i = 0; i < teachers.length; i++) {
    teachers[i].asign();
    console.log(teachers[i]);
}