class Student {
    constructor(name, age, grades) {
        // // this.name = name;
        // // this.age = age;
        this.grades = [];
        this.students = [];
    }
    createStudent(name, age, grades) {
        const student = {
            name: name,
            age: age,
            grades: grades || []
        };
        this.students.push(student);
        return student;
    }
    getAverageGrade (grades) {
        const res = grades.reduce((acc, grade) => acc + grade, 0);
        return res / grades.length;
    }
    addStudent (name, age, grades) {
        return this.createStudent(name, age, grades);
    }
    getStudentInfo (name) {
        const student = this.students.find(student => student.name === name);
        if (student) {
            return {
                name: student.name,
                age: student.age,
                averageGrade: this.getAverageGrade(student.grades),
            };
        } else {
            return `Student with name ${name} not found.`;
        }
    }
    filterStudentsByGrade(grades) { 
            const avg = this.students.filter(student => {
            student.grades > grades;
            })
            return avg;
    }
}   

const student = new Student();
student.createStudent('Alice', 22, 100); // { name: 'Alice', age: 22 }
student.addStudent('Charlie', 21, [90, 95, 85]); // [{ name: 'Charlie', age: 21, grades: [90, 95, 85] }]
console.log(student.getStudentInfo('Charlie'));
console.log(student.filterStudentsByGrade(90));
console.log(student.getAverageGrade([90, 95, 85])); // 90


    