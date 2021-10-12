import express from "express";
const router = express.Router();

import { assignment, getassignment } from "../controllers/uploadAssignment.js";

router.post("/assignmentupload", assignment);
router.get("/assignmentget", getassignment);
export default router;
