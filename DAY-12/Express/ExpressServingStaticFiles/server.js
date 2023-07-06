const express = require("express");
const path = require("path");
const app = express();
const port = 5555;

// middleware
app.use(express.static(path.join("public")));

// app.get("/", (req, res) => {
//   res.sendFile("Index.html", { root: __dirname });
// });

app.get("/products", (req, res) => {
  res.json([
    { id: 1, title: "Laptop" },
    { id: 2, title: "Shoes" },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
