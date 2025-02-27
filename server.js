const express = require('express');
const dotenv = require('dotenv');
const superAdminRoutes = require('./routes/superAdminRoutes');

dotenv.config();  // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Use the SuperAdmin routes
app.use('/SuperAdmin', superAdminRoutes);

// Root route (for testing)
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
