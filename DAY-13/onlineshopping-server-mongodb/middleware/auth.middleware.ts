import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization; // Bearer token
    const token = authHeader?.split(" ")[1] || "";
    console.log(token);
    if (token) {
      jwt.verify(
        token,
        process.env.JWT_SECRET_KEY ?? "",
        (err: any, decodedToken) => {
          if (err) return res.status(500).json({ err: "Invalid Token" });
          // redirect to login page 
          if (decodedToken) next();
        },
      );
    } else {
      return res.status(401).json({ err: "Token not found !" });
    }
  } catch (error) {}
};
