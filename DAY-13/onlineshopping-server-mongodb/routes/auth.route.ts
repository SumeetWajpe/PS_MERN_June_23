import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
var router = express.Router();

router.post("/login", (req: Request, res: Response) => {
  console.log(req.body);
  let userInfo = req.body;
  const saltRounds = 10;
  bcrypt.hash(userInfo.pwd, saltRounds, function (err, hash) {
    // Store hash in your password DB.
    console.log(hash);
  });
  let payload = { name: userInfo.username, lastLogin: "Monday 25th" };
  jwt.sign(
    payload,
    process.env.JWT_SECRET_KEY ?? "",
    { expiresIn: "2 Days" },
    (err, token) => {
      if (err) console.log(err);
      else return res.json({ token });
    },
  );
});

export default router;
