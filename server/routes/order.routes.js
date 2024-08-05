import express from 'express';
import { addOrder } from '../controllers/orders.controller.js';


const router = express.Router();

router.post("/orders", addOrder);

export default router;