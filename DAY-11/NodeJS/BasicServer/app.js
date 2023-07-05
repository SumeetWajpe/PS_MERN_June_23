import http from "http";
import fs from "fs";

const hostname = "127.0.0.1";
const port = 4000;

const server = http.createServer((req, res) => {
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
console.log("Program Ended !");
