import express from 'express'
import { createTrader, updateTrader } from '../controllers/trader.controller.js'

const router = express.Router()

router.post("/create", createTrader)
router.put("/update/:id", updateTrader)

export default router