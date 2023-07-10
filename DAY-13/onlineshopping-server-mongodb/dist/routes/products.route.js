"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_model_1 = __importDefault(require("../models/products.model"));
var router = express_1.default.Router();
/* GET home page. */
router.get("/", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // res.setHeader("Access-Control-Allow-Origin", "*"); // best practise to use cors middleware rather than setting this manually fro every request
        let listofProductsfromDB = yield products_model_1.default.find(); //async
        res.json(listofProductsfromDB);
        try {
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Something went wrong !" });
        }
    });
});
router.post("/newproduct", (req, res) => {
    try {
        let newProduct = req.body; // populated by express.json() middleware
        res.status(201).json(newProduct);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong !" });
    }
});
router.delete("/product/:id", (req, res) => {
    try {
        let productId = parseInt(req.params.id);
        res.json({ msg: "Product Deleted successfully !" });
    }
    catch (error) {
        console.log(error);
    }
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
    try {
        // let productId: number = parseInt(req.params.id);
        // let theProduct = data.products.find(p => p.id === productId);
        // let videoPath = theProduct?.videoUrl || "";
        // // let videoPath = "./videos/shoes.mp4";
        // let vPath = path.resolve(videoPath);
        // const videoSize = fs.statSync(vPath).size;
        // const range = req.headers.range;
        // const chunk_size = 10 ** 6; // 1MB
        // const start = Number(range?.replace(/\D/g, ""));
        // const end = Math.min(start + chunk_size, videoSize - 1);
        // const contentLength = end - start + 1;
        // const headers = {
        //   "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        //   "Accept-Ranges": "bytes",
        //   "Content-Type": "video/mp4",
        //   "Content-Length": contentLength,
        // };
        // const videoStream = fs.createReadStream(videoPath, { start, end });
        // res.writeHead(206, headers);
        // videoStream.pipe(res);
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = router;
