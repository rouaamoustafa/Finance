// Routes/incomesRoutes.js
import express from 'express';
import {
  getIncomes,
  createIncome,
  updateIncome,
  deleteIncome
} from '../Controller/incomesController.js';

const router = express.Router();

// GET all incomes (both admin & subadmin)
router.get('/', getIncomes);

// POST new income (only subadmin)
router.post('/', createIncome);

// PUT (edit) an income (only subadmin)
router.put('/:id', updateIncome);

// DELETE an income (role-based checks in the controller)
router.delete('/:id', deleteIncome);

export default router;
