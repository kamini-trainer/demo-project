const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the CORS middleware

const app = express();
const PORT = 3000;

app.use(bodyParser.json({ limit: '50mb' })); // Set a limit for the body size
app.use(bodyParser.urlencoded({ extended: true }));
// Use CORS middleware
app.use(cors());

app.post('/submit', (req, res) => {
  const data = req.body;

  // Do something with the data, for example, log it
  console.log(data);

  // Respond to the client
  res.send(data);

});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
