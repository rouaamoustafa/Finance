import express from 'express';
import { getProfitGoals, createProfitGoal, deleteProfitGoal } from '../Controller/profitGoalController.js'; 
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/profit_goals', authMiddleware, getProfitGoals);
router.post('/profit_goals', authMiddleware, createProfitGoal);
router.delete('/profit_goals/:id', authMiddleware, deleteProfitGoal);

export default router;
