import supabase from '../config/supabaseClient.js';

// Get all incomes
export const getIncomes = async (req, res) => {
    const { data, error } = await supabase.from('income').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
};

// Create a new income entry
export const createIncome = async (req, res) => {
    const { file, description, amount, currency, date_time } = req.body;
    const { data, error } = await supabase.from('income').insert([
        { file, description, amount, currency, date_time }
    ]);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ message: 'Income added successfully', data });
};

// Delete an income entry
export const deleteIncome = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase.from('income').delete().eq('id', id);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ message: 'Income deleted successfully', data });
};
