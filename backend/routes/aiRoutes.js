import express from "express";
import { calculateHealthScore } from "../controllers/aiController.js";

const router = express.Router();

router.post("/predict", calculateHealthScore);

export default router;