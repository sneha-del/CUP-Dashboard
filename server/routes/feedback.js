import express from "express";
const router = express.Router();

import { sendFeedback, getfeedback } from "../controllers/feedback.js";

router.post("/feedback", sendFeedback);

router.get("/getfeedbacks", getfeedback);
export default router;
