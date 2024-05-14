import { Router } from "express";
import { createCollection, getData, insertData, updateData, deleteData, tests } from "../controllers/example.controller.js";


const router = Router()

// router.get("/", saveData)
router.get("/create-collection", createCollection)
router.get("/fetch-data/:limit/:offset", getData)
router.post("/insert-data", insertData)
router.post("/update-data/:id", updateData)
router.post("/delete-data/:id", deleteData)
router.get("/test", tests)

export default router;

