
// task 1

// function propsCount(currentObject) {

//     let arr = []
//     let res = 0

//     arr = Object.getOwnPropertyNames(currentObject)

//     for (let i = 0; i < arr.length; i += 1) {
//         res += 1
//     }
//     return console.log(res);
// }

// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web-development",
//     direction1: "web-development"

// };

// propsCount(mentor)


// task 2 

// let user = {
//     name: "Jack",
//     surname: "Grey",
//     nickname: "JaGr",
//     id: 253,
//     verificate : true
// }

// function showProps(obj) {

//     let prop = []
//     let values = []

//     prop = Object.getOwnPropertyNames(obj)
//     values = Object.values(obj)

//     return console.log(`Keys : ${prop} ; Values : ${values}`);
// }

// showProps(user)


// task 3 

// class Person {

//     constructor(name, surname){
//         this.name = name
//         this.surname = surname
//     }

//     showFullName() {
//         return `Name : ${this.name} , Surname : ${this.surname}`
//     }

// }


// let newPers = new Person("Steve","Salivan")
// console.log(newPers.showFullName())

// class Student extends Person {

//     constructor(name,surname,year){
//         super(name,surname)
//         this.year = year
//     }

//     showFullName(midleName) {
//         return super.showFullName() + " , Middle Name : " +  midleName
//     }

//     showCourse(){
//         let date = new Date()
//         let curYear = date.getFullYear()
//         let course = curYear - this.year

//         if(course > 6){
//             return "You finish University"
//         }else{
//             return `Current course : ${course}`
//         }
//     }
// }

// let student = new Student("Petro","Petrenko",2016)
// console.log(student.showFullName("Petrovych"));
// console.log(student.showCourse());


// task 4

// let workerList = []
// class Worker {
//     #experience = 1.2
//     salary = 0
//     constructor(fullName, dayRate, workingDays) {
//         workerList.push(this)
//         this.fullName = fullName
//         this.dayRate = dayRate
//         this.workingDays = workingDays
//     }

//     showSalary() {
//         this.salary = this.dayRate * this.workingDays
//         return `${this.fullName} salary : ${this.dayRate * this.workingDays}`
//     }

//     showSalaryWithExperience() {
//         this.salary = this.dayRate * this.workingDays * this.#experience
//         return `${this.fullName} salary : ${this.dayRate * this.workingDays * this.#experience}`
//     }

//     showExp() {
//         return this.#experience
//     }

//     setExp(val) {
//         this.#experience = val
//     }

//     sortBySalary(arr) {

//         arr.sort()
//         console.log('Sorted salary :');
//         for (let i = 0; i < arr.length; i++) {

//              console.log(`${arr[i].fullName} : ${arr[i].salary}`)
//         }

//     }
// }
// console.log(workerList)

// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// console.log(worker1.showSalary())
// console.log("New experience: " + worker1.showExp());
// console.log(worker1.showSalaryWithExperience())
// worker1.setExp(1.5)
// console.log("New experience: " + worker1.showExp());
// console.log(worker1.showSalaryWithExperience())


// let worker2 = new Worker("Tom Tomson", 48, 22)
// console.log(worker2.showSalary())
// worker2.setExp(1.5)
// console.log(worker2.showSalaryWithExperience())



// let worker3 = new Worker("Andy Ander", 29, 23)
// console.log(worker3.showSalary())
// worker3.setExp(1.5)
// console.log(worker3.showSalaryWithExperience())

// worker3.sortBySalary(workerList)



// task 5


class GeometricFigure {

    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    area = 0
    constructor(a, b, c) {
        super()
        this.a = a
        this.b = b
        this.c = c
    }

    getArea() {
        let p = (this.a + this.b + this.c) / 2

        let s = p * (p - this.a) * (p - this.b) * (p - this.c)
        this.area = Math.sqrt(s).toFixed(2)
        return Math.sqrt(s).toFixed(2)
    }

}

class Square extends GeometricFigure {
    area = 0

    constructor(a) {
        super()
        this.a = a
    }

    getArea() {
        this.area = Math.pow(this.a, 2)
        return Math.pow(this.a, 2)
    }
}


class Circle extends GeometricFigure {
    p = 3.14
    area = 0

    constructor(r) {
        super()
        this.r = r
    }

    getArea() {
        this.area = (this.r ** 2) * this.p
        return (this.r ** 2) * this.p
    }
}


function handleFigures(figures) {

    totalArea = 0
    for (let i = 0; i < figures.length; i++) {

        if (Object.getPrototypeOf(figures[i]) == 'GeometricFigure') {
            figures[i].getArea(figures[i].this)
            console.log(`Geometric figure : ${Object.getPrototypeOf(figures[i]).constructor.name} - area : ${figures[i].area}`);
            totalArea += parseInt(figures[i].area)
        } else
            console.log("-");
    }

    console.log(`Total area : ${totalArea}`);
}

const figures = [new Triangle(4, 5, 6), new Square(7), new Circle(5)]
handleFigures(figures)