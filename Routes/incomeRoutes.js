const express = require('express');
const { getIncomes, createIncome, deleteIncome } = require('../Controller/incomeController');
const router = express.Router();

// Routes for income management
router.get('/', getIncomes);        // Access all incomes at /incomes
router.post('/', createIncome);     // Create a new income at /incomes
router.delete('/:id', deleteIncome); // Delete income by ID at /incomes/:id

module.exports = router;
