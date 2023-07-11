"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const isAuthenticated = (req, res, next) => {
    var _a;
    try {
        const authHeader = req.headers.authorization; // Bearer token
        const token = (authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1]) || "";
        console.log(token);
        if (token) {
            jsonwebtoken_1.default.verify(token, (_a = process.env.JWT_SECRET_KEY) !== null && _a !== void 0 ? _a : "", (err, decodedToken) => {
                if (err)
                    return res.status(500).json({ err: "Invalid Token" });
                if (decodedToken)
                    next();
            });
        }
        else {
            return res.status(401).json({ msg: "Token not found !" });
        }
    }
    catch (error) { }
};
exports.isAuthenticated = isAuthenticated;