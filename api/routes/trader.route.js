import express from 'express'
import { createTrader, deleteTrader, getTrader, updateTrader } from '../controllers/trader.controller.js'

const router = express.Router()

router.post("/create", createTrader)
router.put("/update/:id", updateTrader)
router.get("/get/:id", getTrader)
router.delete("/delete/:id", deleteTrader)

export default router