import fs from "fs";

console.log("Start");
// async
fs.readFile("Input.txt", (err, dataFromFile) => {
  if (err) {
    console.log(err);
  } else {
    console.log(dataFromFile.toString());
  }
});

// sync
// let dataFromFile = fs.readFileSync("Input.txt");
// console.log(dataFromFile.toString());
console.log("End");
