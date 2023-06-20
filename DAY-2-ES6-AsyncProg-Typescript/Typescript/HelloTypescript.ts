console.log("Hello Typescript !");
//let x = 100; // Type inference
// x = "Hello";
// console.log(typeof x);

let n: number; // Type annotation
let str: string;
str = "Typescript !";
let b: boolean;
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

var Add = (x: number, y: number): number => x + y;

let result: number = Add(50, 30);
console.log(result);

// Optional arguments
// function PrintBook(author?: string, title?: string, publication?: string) {
//   console.log(author, title, publication);
// }

// Default Arguments
function PrintBook(
  author: string = "Unknown",
  title: string = "Unknown",
  publication: string = "Unknown",
) {
  console.log(author, title, publication);
}

PrintBook();

interface IHuman {
  age: number;
}

interface IPerson {
  name?: string;
  age: number;
  sport: string;
  getDetails: () => string;
}

//var person: IPerson = { name: "Virat", sport: "Cricket", xyz: 123 };

class CPerson implements IPerson, IHuman {
  sport: string;
  age: number;
  getDetails(): string {
    return "Hello";
  }
}
