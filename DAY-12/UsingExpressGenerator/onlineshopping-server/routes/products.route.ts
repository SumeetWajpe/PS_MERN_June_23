import express, { Request, Response } from "express";
import data from "../models/products.model";
import path from "path";
import fs from "fs";
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
  // path to the video
  // status code - 200 success |  201 success (created) | 206 success (partial content)
  // range header
  // fs -> read the video
  // pipe (send the response to client)

  // chunk size / range size -> 1 MB

  // video -> src
  // 1st request (range bytes=0-) -> response (1MB)
  // 2nd request (range bytes=100001-200001)
  // 3rd request (range bytes=200001-300000)

  let productId: number = parseInt(req.params.id);
  let theProduct = data.products.find(p => p.id == productId);
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
});

export default router;
