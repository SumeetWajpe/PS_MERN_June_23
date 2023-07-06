"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_model_1 = __importDefault(require("../models/products.model"));
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
exports.default = router;
