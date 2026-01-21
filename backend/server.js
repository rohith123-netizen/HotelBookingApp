import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js";

const app = express();

// middleware
app.use(express.json())
app.use(clerkMiddleware())

app.use(cors());
// API to listen to Clerk Webhooks
app.use("/api/clerk",clerkWebhooks);

connectDB();

app.get("/", (req, res) => res.send("API"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
