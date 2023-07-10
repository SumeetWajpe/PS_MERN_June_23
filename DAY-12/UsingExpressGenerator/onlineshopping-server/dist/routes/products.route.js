"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_model_1 = __importDefault(require("../models/products.model"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
var router = express_1.default.Router();
/* GET home page. */
router.get("/", function (req, res) {
    // res.setHeader("Access-Control-Allow-Origin", "*"); // best practise to use cors middleware rather than setting this manually fro every request
    res.json(products_model_1.default.products);
});
router.post("/newproduct", (req, res) => {
    let newProduct = req.body; // populated by express.json() middleware
    console.log(newProduct);
    products_model_1.default.products.push(newProduct);
    res.status(201).json(newProduct);
});
router.delete("/product/:id", (req, res) => {
    let productId = parseInt(req.params.id);
    products_model_1.default.products = products_model_1.default.products.filter(p => p.id !== productId);
    res.json({ msg: "Product Deleted successfully !" });
});
router.get("/videos/:id", (req, res) => {
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
    let productId = parseInt(req.params.id);
    let theProduct = products_model_1.default.products.find(p => p.id == productId);
    let videoPath = (theProduct === null || theProduct === void 0 ? void 0 : theProduct.videoUrl) || "";
    // let videoPath = "./videos/shoes.mp4";
    let vPath = path_1.default.resolve(videoPath);
    console.log(vPath);
    const videoSize = fs_1.default.statSync(vPath).size;
    // console.log(videoSize);
    const range = req.headers.range;
    console.log(range);
    const chunk_size = Math.pow(10, 6); // 1MB
    const start = Number(range === null || range === void 0 ? void 0 : range.replace(/\D/g, ""));
    const end = Math.min(start + chunk_size, videoSize - 1);
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Type": "video/mp4",
        "Content-Length": contentLength,
    };
    const videoStream = fs_1.default.createReadStream(videoPath, { start, end });
    res.writeHead(206, headers);
    videoStream.pipe(res);
});
exports.default = router;
