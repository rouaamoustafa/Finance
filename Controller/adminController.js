// Controller/adminController.js
import supabase from '../config/supabaseClient.js';
import jwt from 'jsonwebtoken';

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Missing email or password' });
    }

    const { data, error } = await supabase
      .from('admins')
      .select('*')
      .eq('email', email)
      .eq('password', password)
      .limit(1);

    if (error) return res.status(500).json({ error: error.message });
    if (!data || data.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = data[0]; // e.g. { admin_id, name, email, password, role }

    // Create JWT
    const payload = { admin_id: user.admin_id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({
      message: 'Login successful',
      token, // the client stores this
      user: {
        admin_id: user.admin_id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create Admin
export const createAdmin = async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password || !role) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const { data, error } = await supabase
    .from('admins')
    .insert([{ name, email, password, role }]);

  if (error) {
    return res.status(500).json({ error: 'Error creating admin', details: error.message });
  }

  res.status(200).json({ message: 'Admin created successfully', data });
};

// Get All Admins
export const getAdmins = async (req, res) => {
  const { data, error } = await supabase.from('admins').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

// Get Admins by role=admin
export const getAdminsByRole = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('admins')
      .select('*')
      .eq('role', 'admin');

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Admin
export const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: 'Missing admin ID' });

    const { data, error } = await supabase
      .from('admins')
      .delete()
      .eq('admin_id', id)
      .select('*');

    if (error) return res.status(500).json({ error: error.message });
    if (!data || data.length === 0) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    res.status(200).json({ message: 'Admin deleted successfully', data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
