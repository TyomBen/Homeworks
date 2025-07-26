//1

class Shape {
    constructor () {
        if(new.target === Shape) {
            throw new Error ("Cannot instantiate");
        }
    }
    getArea () {
        throw new Error ('Cannot instantiate');
    }
}

class Rectangle extends Shape {
    constructor (width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea () {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor (width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea () {
        return this.width * this.height;
    }
}
const circle = new Circle (10, 5);     
const rect = new Rectangle(10, 5);
console.log(rect.getArea());
console.log(circle.getArea());

//2

class StorageProvider {
    upload(file) {
        throw new Error ('Cannot instantiate');
    }
    download(filename) {
        throw new Error ('Cannot instantiate');
    }
}

class LocalStorageProvider {
    download(filename) {
        console.log(`${filename} "It's ok`);
        
    }
    upload(file) {
        console.log(`${file} It's ok`);
    }
}

class CloudStorageProvider {
    download(filename) {
        console.log(`${filename} It's ok`);
    }
    upload(file) {
        console.log(`${file} It's ok`);
    }
}
const local = new LocalStorageProvider ();
const cloud = new CloudStorageProvider ();

useStorage (local);
useStorage (cloud);
function useStorage(provider) {
    if(typeof provider.download !== 'function' || typeof provider.upload !== 'function'){
        throw new Error('Provider must implement upload() and download()');
    }
    console.log("It's ok");
    
}

//3

class Animal {
    speak () {
        console.log('Animal makes a sound');
    }
}

class Dog extends Animal {
    speak() {
        super.speak();
        console.log('Dog barks');
    }
}
const dog = new Dog ();
dog.speak();


//4

class Employee {
    constructor () {
        if(new.target === Employee){
            throw new Error ('Cannot instantiate');
        }
    }
    getSalary () {
        throw new Error ('Cannot instantiate');
    }
}

class FullTimeEmployee extends Employee{
    getSalary () {
        return 'Work time 10.00-17.00';
        
    }
}

class PartTimeEmployee extends Employee {
    getSalary () {
        return 'Work time 10.00-16.00';
    }
}

class Freelancer extends Employee{
    getSalary () {
        return 'There is not difference';
    }
}

const employees = [new FullTimeEmployee(), new Freelancer(), new PartTimeEmployee()];
for (const emp of employees) {
  console.log(emp.getSalary()); // У каждого — своя логика
}

//5

class Device {
   constructor () {
        if(new.target === Device) {
            throw new Error ('Cannot instantiate');
        }
   }
   info () {
        console.log(Device.name);
   }
}

class Computer extends Device {
    info () {
        super.info();
        console.log(Computer.name);
    }
}

class Laptop extends Computer {
    info () {
        super.info();
        console.log(this.constructor.name);
    }
}

const myLaptop = new Laptop(); 
myLaptop.info(); 