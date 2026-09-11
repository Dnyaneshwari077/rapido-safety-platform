import express from "express";
import cors from "cors";
import pool from "./config/db";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "RideSafe backend is running 🚗" });
});

const PORT = 5000;

pool.query("SELECT NOW()")
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error: unknown) => {
    console.error("Database connection failed:", error);
  });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});