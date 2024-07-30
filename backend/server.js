const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  fs.readFile('title.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read title' });
    }
    const title = JSON.parse(data).title;
    res.json({ title });
  });
});

app.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  fs.writeFile('title.json', JSON.stringify({ title }), 'utf8', (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to save title' });
    }
    res.json({ success: true });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
