const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/sum', (req, res) => {
    const numbers = req.body.numbers;
    if (!Array.isArray(numbers)) {
        return res.status(400).send('Invalid input');
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    res.json({ sum: sum });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
