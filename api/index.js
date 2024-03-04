import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";

dotenv.config();

const app = express();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to mogodb");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());

app.use("/api/user", userRoute);

app.listen(3000, () => {
  console.log("server on port 3000");
});
