import express from "express";
const router = express.Router();

import { tsignin, tsignup, teacherdetails } from "../controllers/teacher.js";

router.post("/tsignin", tsignin);
router.post("/tsignup", tsignup);
// router.get("/teacherdet",)
router.get("/teacherdata", teacherdetails);
export default router;
