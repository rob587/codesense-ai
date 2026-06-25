import express from "express";
import cors from "cors";
import dotenv from "dotenv";
//importare routes
import reviewRouter from "./routes/review.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", reviewRouter);

app.listen(PORT, () => {
  console.log(`Server aperto nella porta: ${PORT}`);
});
