import express from "express";
import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";
import productRouter from "./routers/productRouter.js";
import uploadRouter from "./routers/uploadRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazona_one", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api/uploads", uploadRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/products", productRouter);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
