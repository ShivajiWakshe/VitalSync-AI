import express from "express";
import { getHealthData } from "../controllers/healthController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getHealthData);

export default router;