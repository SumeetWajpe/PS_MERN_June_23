import jwt from "jsonwebtoken";
export const generateToken = (uname: string) => {
  let payload = { name: uname, lastLogin: "Monday 25th" };
  jwt.sign(
    payload,
    process.env.JWT_SECRET_KEY ?? "",
    { expiresIn: "2 Hours" },
    (err, token) => {
      if (err) console.log(err);
      else token;
    },
  );
};
