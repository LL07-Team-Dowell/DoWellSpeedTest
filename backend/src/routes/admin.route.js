import { Router } from "express";
import { healthCheck } from "../controllers/admin.controller.js";


const router = Router()

router.get("/admin-health-check", healthCheck)


export default router;