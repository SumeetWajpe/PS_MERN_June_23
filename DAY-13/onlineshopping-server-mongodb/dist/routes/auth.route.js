"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var router = express_1.default.Router();
router.post("/login", (req, res) => {
    var _a;
    //   console.log(req.body);
    let userInfo = req.body;
    let payload = { name: userInfo.username, lastLogin: "Monday 25th" };
    jsonwebtoken_1.default.sign(payload, (_a = process.env.JWT_SECRET_KEY) !== null && _a !== void 0 ? _a : "", { expiresIn: "2 Days" }, (err, token) => {
        if (err)
            console.log(err);
        else
            return res.cookie("token", token).json({ msg: "success" });
    });
});
exports.default = router;
