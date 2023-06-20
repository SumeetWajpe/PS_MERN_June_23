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

function Add(x: number, y: number): number {
  return x + y;
}

let result: number = Add(20, 30);
console.log(result);
