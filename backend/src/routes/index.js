import { Router } from "express";
import healtcheckRoutes from './healthcheck.route.js'
import exampleRoutes from './example.route.js'
import adminRoutes from './admin.route.js'
 
const router = Router()


router.use("/healtcheckup", healtcheckRoutes)
router.use("/example-data", exampleRoutes)
router.use("/admin-service", adminRoutes)

export default router