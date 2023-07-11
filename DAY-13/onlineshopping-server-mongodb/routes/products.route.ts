import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import products from "../models/products.model";
import { isAuthenticated } from "../middleware/auth.middleware";
var router = express.Router();

/* GET home page. */
router.post("/", isAuthenticated, async function (req: Request, res: Response) {
  // res.setHeader("Access-Control-Allow-Origin", "*"); // best practise to use cors middleware rather than setting this manually fro every request

  let listofProductsfromDB = await products.find(); //async
  res.json(listofProductsfromDB);
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong !" });
  }
});

router.post(
  "/newproduct",
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      let newProductFromRequest = req.body; // populated by express.json() middleware

      let newProductToBeInserted = new products({ ...newProductFromRequest });

      await newProductToBeInserted.save();

      res.status(201).json(newProductFromRequest);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Something went wrong !" });
    }
  },
);

router.delete(
  "/product/:id",
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      let productId: number = parseInt(req.params.id);

      let result = await products.deleteOne({ id: productId });
      if (result.acknowledged && result.deletedCount) {
        res.json({ msg: "Product Deleted successfully !" });
      } else {
        throw new Error("Something went wrong !");
      }
    } catch (error: any) {
      console.log(error);
      res.status(500).json({ error: error?.message as string });
    }
  },
);

router.get("/videos/:id", async (req: Request, res: Response) => {
  try {
    let productId: number = parseInt(req.params.id);
    let theProduct = await products.findOne({ id: productId });
    let videoPath = theProduct?.videoUrl || "";
    // let videoPath = "./videos/shoes.mp4";
    let vPath = path.resolve(videoPath);
    const videoSize = fs.statSync(vPath).size;
    const range = req.headers.range;
    const chunk_size = 10 ** 6; // 1MB
    const start = Number(range?.replace(/\D/g, ""));
    const end = Math.min(start + chunk_size, videoSize - 1);
    const contentLength = end - start + 1;
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Type": "video/mp4",
      "Content-Length": contentLength,
    };
    const videoStream = fs.createReadStream(videoPath, { start, end });
    res.writeHead(206, headers);
    videoStream.pipe(res);
  } catch (error) {
    console.log(error);
  }
});

export default router;
