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
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const products_model_1 = __importDefault(require("../models/products.model"));
const auth_middleware_1 = require("../middleware/auth.middleware");
var router = express_1.default.Router();
/* GET home page. */
router.post("/", auth_middleware_1.isAuthenticated, function (req, res) {
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
router.post("/newproduct", auth_middleware_1.isAuthenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newProductFromRequest = req.body; // populated by express.json() middleware
        let newProductToBeInserted = new products_model_1.default(Object.assign({}, newProductFromRequest));
        yield newProductToBeInserted.save();
        res.status(201).json(newProductFromRequest);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong !" });
    }
}));
router.delete("/product/:id", auth_middleware_1.isAuthenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let productId = parseInt(req.params.id);
        let result = yield products_model_1.default.deleteOne({ id: productId });
        if (result.acknowledged && result.deletedCount) {
            res.json({ msg: "Product Deleted successfully !" });
        }
        else {
            throw new Error("Something went wrong !");
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error === null || error === void 0 ? void 0 : error.message });
    }
}));
router.get("/videos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let productId = parseInt(req.params.id);
        let theProduct = yield products_model_1.default.findOne({ id: productId });
        let videoPath = (theProduct === null || theProduct === void 0 ? void 0 : theProduct.videoUrl) || "";
        // let videoPath = "./videos/shoes.mp4";
        let vPath = path_1.default.resolve(videoPath);
        const videoSize = fs_1.default.statSync(vPath).size;
        const range = req.headers.range;
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
    }
    catch (error) {
        console.log(error);
    }
}));
exports.default = router;
