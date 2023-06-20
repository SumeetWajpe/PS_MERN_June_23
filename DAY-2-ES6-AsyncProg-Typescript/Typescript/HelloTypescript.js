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
