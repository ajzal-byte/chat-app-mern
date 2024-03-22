import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });

app.listen(PORT, async () => {
  await connectToMongoDB();
  console.log(`Server started listening on port ${PORT}`);
});
