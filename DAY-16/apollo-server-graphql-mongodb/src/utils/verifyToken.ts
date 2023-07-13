import jwt from "jsonwebtoken";

export const verifyToken = (authHeader: string) => {
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY ?? "", (err, decodedToken) => {
      if (err) return { err: "Invalid Token" };
      if (decodedToken) return { err: null, decodedToken };
    });
  } else {
    return { err: "Token not found" };
  }
};
