import express from "express";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import { Server } from "socket.io";
import authRoutes from "./routes/auth.js";
import dataRoutes from "./routes/data.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" }});

app.use(express.json());
app.use(cors());

// Connect Mongo
mongoose.connect(process.env.MONGO_URI).then(() => console.log("DB Connected"));

// Socket.IO
io.on("connection", (socket)=>{
  console.log("Client connected");

  setInterval(()=>{
    const vitals = {
      heartRate: Math.floor(60 + Math.random()*70),
      steps: Math.floor(Math.random()*100),
      calories: Math.floor(Math.random()*500),
      sleep: Math.floor(Math.random()*100),
    };
    socket.emit("vitalsData", vitals);
  }, 2000);
});

app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);

server.listen(process.env.PORT, ()=> console.log("Server running"));