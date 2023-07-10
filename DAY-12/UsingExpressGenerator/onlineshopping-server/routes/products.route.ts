import express, { Request, Response } from "express";
import data from "../models/products.model";

var router = express.Router();

/* GET home page. */
router.get("/", function (req: Request, res: Response) {
  // res.setHeader("Access-Control-Allow-Origin", "*"); // best practise to use cors middleware rather than setting this manually fro every request
  res.json(data.products);
});

router.post("/newproduct", (req: Request, res: Response) => {
  let newProduct = req.body; // populated by express.json() middleware
  console.log(newProduct);

  data.products.push(newProduct);
  res.status(201).json(newProduct);
});

router.delete("/product/:id", (req: Request, res: Response) => {
  let productId: number = parseInt(req.params.id);
  data.products = data.products.filter(p => p.id !== productId);
  res.json({ msg: "Product Deleted successfully !" });
});

router.get("/videos/:id", (req: Request, res: Response) => {
  // send chunk of the video
});

export default router;
