const express = require("express");
const app = express();
const port = 3000;
const productsRouter = require("./routes/products.routes");
const userRouter = require("./routes/users.routes");

app.use("/products", productsRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
