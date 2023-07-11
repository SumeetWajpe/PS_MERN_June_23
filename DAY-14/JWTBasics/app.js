import express from "express";
import jwt from "jsonwebtoken";
const app = express();
const SECRET_KEY = "SECRET_KEY";
// server side to store password in db (bcrypt)
app.use(express.json());

app.post("/login", (req, res) => {
  // get uname + pwd from req.body
  // verify if the user exists ! DB
  // sign the token (create)
  console.log(req.body);
  let payload = { name: req.body.uname, lastLogin: "Monday 25th" };
  jwt.sign(payload, SECRET_KEY, { expiresIn: "2 Days" }, (err, token) => {
    if (err) console.log(err);
    else return res.json({ token });
  });
});

app.post("/verify", (req, res) => {
  const authHeader = req.headers.authorization; // Bearer token
  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET_KEY, (err, decodedToken) => {
    if (err) return res.status(500).json({ err: "Invalid Token" });
    console.log(decodedToken);
  });
  res.json({ msg: "success" });
});

app.listen(3600, () => {
  console.log("Service running @ 3600");
});
