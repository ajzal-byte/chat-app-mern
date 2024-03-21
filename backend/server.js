import express from "express";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/auth.routes.js"

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello world!")
})

app.use("/api/auth", authRoutes)

app.listen(PORT, () => console.log(`Server started listening on port ${PORT}`));
