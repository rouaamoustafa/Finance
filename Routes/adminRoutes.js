// Routes/adminRoutes.js
import express from 'express';
import {
  createAdmin, getAdmins, getAdminsByRole, deleteAdmin, loginAdmin
} from '../Controller/adminController.js';

const router = express.Router();

// 1. Login (public)
router.post('/login', loginAdmin);

// 2. Create an admin (public or protected? your choice)
router.post('/', createAdmin);

// 3. GET all admins
router.get('/', getAdmins);
router.get('/admin-only', getAdminsByRole);

// 4. Delete admin
router.delete('/:id', deleteAdmin);

export default router;
