const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send('hello world from express! Our backend and our frontend link up. How lovely!');
});

app.listen(1234);