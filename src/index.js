import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();

const server = express();

const PORT = process.env.PORT || 3000;

server.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    origin: "*",
  })
);
server.use(express.json());

server.listen(PORT, () => {
  console.log(`Server running ... port: ${PORT}`);
});

function connectDB() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Database found");
    })
    .catch((e) => {
      console.error("Error to connecto to the db");
      console.error(e.message);
    });
}
