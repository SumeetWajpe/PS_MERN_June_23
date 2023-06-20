console.log("Hello Typescript !");
//let x = 100; // Type inference
// x = "Hello";
// console.log(typeof x);
var n; // Type annotation
var str;
str = "Typescript !";
var b;
var s; // bad
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
var Add = function (x, y) { return x + y; };
var result = Add(50, 30);
console.log(result);
// Optional arguments
// function PrintBook(author?: string, title?: string, publication?: string) {
//   console.log(author, title, publication);
// }
// Default Arguments
function PrintBook(author, title, publication) {
    if (author === void 0) { author = "Unknown"; }
    if (title === void 0) { title = "Unknown"; }
    if (publication === void 0) { publication = "Unknown"; }
    console.log(author, title, publication);
}
PrintBook();
//var person: IPerson = { name: "Virat", sport: "Cricket", xyz: 123 };
var CPerson = /** @class */ (function () {
    function CPerson() {
    }
    CPerson.prototype.getDetails = function () {
        return "Hello";
    };
    return CPerson;
}());
// var person: Person = { name: "Virat", sport: "Cricket", xyz: 123 };
var Car = /** @class */ (function () {
    function Car(name, speed) {
        if (name === void 0) { name = "BMW"; }
        if (speed === void 0) { speed = 200; }
        this.name = name;
        this.speed = speed;
    }
    return Car;
}());
var carObj = new Car();
console.log(carObj.speed);
// let carsColl: Car[] = [new Car()];
var carsColl = new Array(new Car(), new Car());
// OR
// Enhanced class syntax
var EnhancedCar = /** @class */ (function () {
    function EnhancedCar(name, speed) {
        if (name === void 0) { name = "Audi"; }
        if (speed === void 0) { speed = 300; }
        this.name = name;
        this.speed = speed;
    }
    return EnhancedCar;
}());
var enhancedCarObj = new EnhancedCar();
// Generics
// var cars: string[] = ["BMW", "AUDI", "MERC", 10]; // Error
// OR
var carsObj = new Array("TATA", "MAHINDRA");
// Generic Function
function Swap(x, y) {
    var t;
    t = x;
    x = y;
    y = t;
}
Swap(20, 30);
Swap("Hello", "World");
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point = new Point();
// class Book -> id, title, author
// coll of 5 books (array)
