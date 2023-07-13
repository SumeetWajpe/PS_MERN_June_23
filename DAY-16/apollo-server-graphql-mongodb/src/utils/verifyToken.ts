import jwt from "jsonwebtoken";

export const verifyToken = (authHeader: string) => {
  return new Promise((resolve, reject) => {
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(
        token,
        process.env.JWT_SECRET_KEY ?? "",
        (err, decodedToken) => {
          if (err) reject({ err: "Invalid Token" });
          if (decodedToken) resolve({ err: null, decodedToken });
        },
      );
    } else {
      return reject({ err: "Token not found" });
    }
  });
};
