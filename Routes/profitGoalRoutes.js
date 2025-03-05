import express from 'express';
import { getProfitGoals, createProfitGoal, deleteProfitGoal } from '../Controller/profitGoalController.js'; 
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/profit_goal', authMiddleware, getProfitGoals);
router.post('/profit_goal', authMiddleware, createProfitGoal);
router.delete('/profit_goal/:id', authMiddleware, deleteProfitGoal);

export default router;
