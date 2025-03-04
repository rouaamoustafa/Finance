// server.js (ESM style)
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { authMiddleware } from './middleware/authMiddleware.js';

import adminRoutes from './Routes/adminRoutes.js';
import incomesRoutes from './Routes/incomesRoutes.js';
import expensesRoutes from './Routes/expensesRoutes.js';
import recurringExpensesRoutes from './Routes/recurringExpensesRoutes.js';
import recurringIncomesRoutes from './Routes/recurringIncomesRoutes.js';
import profitGoalRoutes from './Routes/profitGoalRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

// Public: admin login, create admin, etc.
app.use('/admins', adminRoutes);

// Protected: incomes routes require a valid JWT
app.use('/incomes', authMiddleware, incomesRoutes);
app.use('/api', expensesRoutes);
app.use('/api', recurringExpensesRoutes);
app.use('/api', recurringIncomesRoutes);
app.use('/api', profitGoalRoutes);
app.get('/', (req, res) => {
  res.send('Backend is running with JWT auth!');
});



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
