import express from 'express';
import { getRecurringExpenses, createRecurringExpense ,updateRecurringExpense,deleteRecurringExpense} from '../Controller/recurringExpensesController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/recurring_expenses', authMiddleware, getRecurringExpenses);
router.post('/recurring_expenses', authMiddleware, createRecurringExpense);
router.put('/recurring_expenses/:id', authMiddleware, updateRecurringExpense);
router.delete('/recurring_expenses/:id', authMiddleware, deleteRecurringExpense);


export default router;
