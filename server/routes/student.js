import express from "express";
const router = express.Router();
import {
    getStudents,
    createStudent,
    deleteStudent,
    getTest,
} from "../controllers/student.js";

router.get("/", getStudents);
router.get("/api", getTest);
router.post("/", createStudent);
router.delete("/:id", deleteStudent);

export default router;
