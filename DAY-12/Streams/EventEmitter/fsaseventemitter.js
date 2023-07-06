var fs = require("fs");

// fs.readFile("Input.txt", (err, data) => {
//   console.log(data.toString());
// });

let readableStream = fs.createReadStream("Input.txt", "utf-8");
let writableStream = fs.createWriteStream("Output.txt", "utf-8");

// let dataToBeWritten = "";
// readableStream.on("data", chunk => {
//   console.log("\n>>>>>>>>>>>>>>>>>>> CHUNK >>>>>>>>>>>>>\n");
//   dataToBeWritten += chunk;
// });

// readableStream.on("end", () => {
//   // when the input.txt is read completely
//   writableStream.write(dataToBeWritten);
//   writableStream.end(); // closing the writable stream
// });

readableStream.pipe(writableStream);

console.log("Ended !");
