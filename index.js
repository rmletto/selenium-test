const express = require('express');
const app = express();
const port = 3000;

// Homepage endpoint
app.get('/', (req, res) => {
    res.sendFile('views/index.html', { root: __dirname });
});

// Example REST API endpoint
app.get('/value', (req, res) => {
    res.send({ value: 42 });
});

app.listen(port, () => {
    console.log(`App listening at ${port}`);
});
