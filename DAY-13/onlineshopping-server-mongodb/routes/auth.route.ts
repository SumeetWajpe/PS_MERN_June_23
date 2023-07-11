import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
var router = express.Router();

router.post("/login", (req: Request, res: Response) => {
  //   console.log(req.body);
  let userInfo = req.body;
  let payload = { name: userInfo.username, lastLogin: "Monday 25th" };
  jwt.sign(
    payload,
    process.env.JWT_SECRET_KEY ?? "",
    { expiresIn: "2 Days" },
    (err, token) => {
      if (err) console.log(err);
      else return res.cookie("jwt-token", token).json({ msg: "success" });
    },
  );
});

export default router;
