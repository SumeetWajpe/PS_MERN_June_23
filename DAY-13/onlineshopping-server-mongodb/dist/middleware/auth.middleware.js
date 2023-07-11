"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const isAuthenticated = (req, res, next) => {
    try {
        // jwt-token=token;xyz=123;name=pqr;
        // use this if token is passed in cookie
        const cookie = req.headers.cookie;
        if (cookie) {
            const values = cookie === null || cookie === void 0 ? void 0 : cookie.split(";").reduce((prevItems, item) => {
                const data = item.trim().split("=");
                return Object.assign(Object.assign({}, prevItems), { [data[0]]: data[1] });
            }, {});
            console.log(values);
        }
        //use this if token passed in header
        // const authHeader = req.headers.authorization; // Bearer token
        // const token = authHeader?.split(" ")[1] || "";
        // console.log(token);
        // if (token) {
        //   jwt.verify(
        //     token,
        //     process.env.JWT_SECRET_KEY ?? "",
        //     (err: any, decodedToken) => {
        //       if (err) return res.status(500).json({ err: "Invalid Token" });
        //       // redirect to login page
        //       if (decodedToken) next();
        //     },
        //   );
        // } else {
        //   return res.status(401).json({ err: "Token not found !" });
        // }
    }
    catch (error) { }
};
exports.isAuthenticated = isAuthenticated;
