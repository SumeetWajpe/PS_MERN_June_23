import http from "http";
import fs from "fs";

const hostname = "127.0.0.1";
const port = 4000;

const server = http.createServer((req, res) => {
  // fetch data from Index.html
  console.log(req.url);
  if (req.url == "/") {
    fs.readFile("Index.html", (err, data) => {
      if (err) {
        console.log("Error !", err);
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data.toString());
      }
    });
  } else if (req.url == "/styles.css") {
    fs.readFile("styles.css", (err, data) => {
      if (err) {
        console.log("Error !", err);
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/css");
        res.end(data.toString());
      }
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
console.log("Program Ended !");
