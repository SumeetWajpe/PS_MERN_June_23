import express, { Request, Response } from "express";
import products from "../models/products.model";

var router = express.Router();

/* GET home page. */
router.get("/", function (req: Request, res: Response) {
  res.json(products);
});

export default router;
