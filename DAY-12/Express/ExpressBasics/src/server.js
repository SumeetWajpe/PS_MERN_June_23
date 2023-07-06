const express = require("express");
const app = express();
const port = 5555;

app.get("/", (req, res) => {
  //   res.send("<h1>Hello World!</h1>");
  //   res.json([
  //     { id: 1, title: "Laptop" },
  //     { id: 2, title: "Shoes" },
  //   ]);

  res.sendFile("Index.html", { root: __dirname });
});

app.get("/styles.css", (req, res) => {
  res.sendFile("styles.css", { root: __dirname });
});

app.get("/script.js", (req, res) => {
  res.sendFile("script.js", { root: __dirname });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
