const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;  // Render will override with its own PORT

// Serve any static files (if applicable)
app.use(express.static(path.join(__dirname, 'public')));

// Basic route to test if the service is running
app.get('/', (req, res) => {
  res.send('AR Engine is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
