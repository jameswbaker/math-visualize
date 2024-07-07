const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

app.get('/api', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
