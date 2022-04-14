import express from "express";
import cors from "cors";

import connectDB from "./db/db.js";

import userRoutes from "./routes/userRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";

const app = express();
const port = 8080;

// accept json requests
app.use(express.json());

connectDB();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api/user", userRoutes);
app.use("/api/event", eventRoutes);

app.use("/", (req, res) => res.send("API is running..."));

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
