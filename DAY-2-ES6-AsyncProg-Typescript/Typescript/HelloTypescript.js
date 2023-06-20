console.log("Hello Typescript !");
//let x = 100; // Type inference
// x = "Hello";
// console.log(typeof x);
let n; // Type annotation
let str;
str = "Typescript !";
let b;
let s; // bad
s = 10;
s = "Hello";
s = {};
s = [];
// Functions
// function Add(x: number, y: number): number {
//   return x + y;
// }
// let result: number = Add(20, 30);
// console.log(result);
var Add = (x, y) => x + y;
let result = Add(50, 30);
console.log(result);
// Optional arguments
// function PrintBook(author?: string, title?: string, publication?: string) {
//   console.log(author, title, publication);
// }
// Default Arguments
function PrintBook(author = "Unknown", title = "Unknown", publication = "Unknown") {
    console.log(author, title, publication);
}
PrintBook();
//var person: IPerson = { name: "Virat", sport: "Cricket", xyz: 123 };
class CPerson {
    getDetails() {
        return "Hello";
    }
}
// var person: Person = { name: "Virat", sport: "Cricket", xyz: 123 };
class Car {
    constructor(name = "BMW", speed = 200) {
        this.name = name;
        this.speed = speed;
    }
}
var carObj = new Car();
console.log(carObj.speed);
// let carsColl: Car[] = [new Car()];
let carsColl = new Array(new Car(), new Car());
// OR
// Enhanced class syntax
class EnhancedCar {
    constructor(name = "Audi", speed = 300) {
        this.name = name;
        this.speed = speed;
    }
}
var enhancedCarObj = new EnhancedCar();
// Generics
// var cars: string[] = ["BMW", "AUDI", "MERC", 10]; // Error
// OR
var carsObj = new Array("TATA", "MAHINDRA");
// Generic Function
function Swap(x, y) {
    let t;
    t = x;
    x = y;
    y = t;
}
Swap(20, 30);
Swap("Hello", "World");
class Point {
}
var point = new Point();
// class Book -> id, title, author
// coll of 5 books (array)
