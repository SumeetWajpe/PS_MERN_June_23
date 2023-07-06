import express, { Request, Response } from "express";
import products from "../models/products.model";

var router = express.Router();

/* GET home page. */
router.get("/", function (req: Request, res: Response) {
  // res.setHeader("Access-Control-Allow-Origin", "*"); // best practise to use cors middleware rather than setting this manually fro every request
  res.json(products);
});



export default router;
