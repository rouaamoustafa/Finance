import supabase from '../config/supabaseClient.js';

// Fetch all profit goals (Admins & Subadmins)
export const getProfitGoals = async (req, res) => {
  try {
    const { data, error } = await supabase.from('profit_goal').select('*');

    if (error) return res.status(500).json({ error: error.message });
    return res.json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Create a new profit goal (ONLY Subadmins)
export const createProfitGoal = async (req, res) => {
  try {
    if (req.user.role !== 'subadmin') {
      return res.status(403).json({ error: 'Only subadmins can add profit goals' });
    }

    const { amount, currency, date } = req.body;
    if (!amount || !currency || !date) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const { data, error } = await supabase
      .from('profit_goal')
      .insert([{ amount, currency, date, admin_id: req.user.admin_id }])
      .select('*');

    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json({ message: 'Profit goal created', profit_goal: data[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a profit goal (ONLY Subadmins)
export const deleteProfitGoal = async (req, res) => {
  try {
    if (req.user.role !== 'subadmin') {
      return res.status(403).json({ error: 'Only subadmins can delete profit goals' });
    }

    const { id } = req.params;
    const { data, error } = await supabase.from('profit_goal').delete().eq('profit_goal_id', id);

    if (error) return res.status(500).json({ error: error.message });
    res.json({ message: 'Profit goal deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
