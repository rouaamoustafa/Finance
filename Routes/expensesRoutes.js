import express from 'express';
import { getExpenses, createExpense, updateExpense, deleteExpense } from '../Controller/expensesController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/expenses', authMiddleware, getExpenses);
router.post('/expenses', authMiddleware, createExpense);
router.put('/expenses/:id', authMiddleware, updateExpense);
router.delete('/expenses/:id', authMiddleware, deleteExpense);

export default router;
