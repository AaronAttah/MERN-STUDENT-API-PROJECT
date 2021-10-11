import express from "express";
const router = express.Router();
import {getCalm, sendCalm} from '../controllers/calm.js'

router.get("/", getCalm)
router.post("/", sendCalm)

export default router;
