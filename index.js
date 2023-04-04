const express = require('express');
const app = express(express.json());
const PORT = 3000;

app.get('/hello', (_, res) => {
    res.status(200).json('Example API - IT Talent')
});

app.listen(PORT, () => {
    console.log(`Example API listening on port ${PORT}`);
});
