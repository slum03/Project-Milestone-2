const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Import the path module

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serves static files in the 'public' folder

// Route to serve the index.html (or home page) at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email } = req.body;
    console.log(`Received form submission: Name - ${name}, Email - ${email}`);
    
    // Placeholder response, you can save this to a database if needed
    res.json({ message: `Thank you, ${name}! We received your message.` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
