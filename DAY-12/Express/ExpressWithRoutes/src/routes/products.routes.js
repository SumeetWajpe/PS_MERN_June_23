const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, title: "Laptop" },
    { id: 2, title: "Shoes" },
  ]);
});
router.post("/newproduct", (req, res) => {
  res.json({ msg: "Product added successfully !" });
});

module.exports = router;
