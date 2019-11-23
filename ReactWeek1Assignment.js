class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister) {
        if (this.students.includes(studentToRegister.name)) {
            console.log(`The student ${this.students} is already registered to the ${this.level} bootcamp.`);
        }
        else {
            this.students.push(studentToRegister.name);
            console.log(`Registering ${this.students} to the ${this.level} bootcamp.`);
            return this.students;
        }
    }
}


const fullStack = new Bootcamp("Full Stack Web and Mobile Development", "Advanced");
const webDevFundamentals = new Bootcamp("Web Development Fundamentals", "Beginner");


const Neo = new Student("Neo", "neo@matrix.com", "Seattle");
const Morpheus = new Student("Morpheus", "morpheus@matrix.com", "Portland");
const Trinity = new Student("Trinity", "trinity@matrix.com", "Spokane");



