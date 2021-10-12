import express from "express";
const router = express.Router();

import { ssignin, ssignup, studentdetails } from "../controllers/student.js";

router.post("/ssignin", ssignin);
router.post("/ssignup", ssignup);
router.get("/studentdetails", studentdetails);
export default router;
