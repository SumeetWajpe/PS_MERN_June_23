let fs = require("fs");
let http = require("http");
const hostname = "127.0.0.1";
const port = 4000;

const server = http.createServer((req, res) => {
  // fetch data from Index.html

  if (req.url == "/") {
    fs.readFile(__dirname + "/../client/Index.html", (err, data) => {
      if (err) {
        console.log("Error !", err);
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data.toString());
      }
    });
  } else if (req.url == "/styles.css") {
    fs.readFile(__dirname + "/../client/styles.css", (err, data) => {
      if (err) {
        console.log("Error !", err);
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/css");
        res.end(data.toString());
      }
    });
  } else if (req.url == "/script.js") {
    fs.readFile(__dirname + "/../client/script.js", (err, data) => {
      if (err) {
        console.log("Error !", err);
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/javascript");
        res.end(data.toString());
      }
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
console.log("Program Ended !");
