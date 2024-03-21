import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // Max age of the cookie in ms
    httpOnly: true, // Ensures that the cookie is only accessible via HTTP requests, not JavaScript
    sameSite: "strict", // Prevents the cookie from being sent in cross-site requests (CSRF protection)
    secure: process.env.NODE_ENV !== "development"
  });
};

export default generateTokenAndSetCookie;
