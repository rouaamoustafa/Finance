const express = require('express');
const dotenv = require('dotenv');
const incomeRoutes = require('./Routes/incomeRoutes');
const superAdminRoutes = require('./Routes/superAdminRoutes');   

dotenv.config();  // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Use the SuperAdmin routes
app.use('/SuperAdmin', superAdminRoutes);  

// Use the income routes 
app.use('/incomes', incomeRoutes);

// Root route (for testing)
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
