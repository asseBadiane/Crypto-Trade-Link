import express from 'express'
import { createTrader } from '../controllers/trader.controller.js'

const router = express.Router()

router.post("/create", createTrader)

export default router