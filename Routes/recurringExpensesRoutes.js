import express from 'express';
import { getRecurringIncomes, createRecurringIncome ,updateRecurringIncome,deleteRecurringIncome} from '../Controller/recurringIncomesController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/recurring_incomes', authMiddleware, getRecurringIncomes);
router.post('/recurring_incomes', authMiddleware, createRecurringIncome);
router.put('/recurring_incomes/:id', authMiddleware, updateRecurringIncome);
router.delete('/recurring_incomes/:id', authMiddleware, deleteRecurringIncome);

export default router;
