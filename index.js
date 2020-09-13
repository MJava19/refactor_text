const express = require('express');
const app = express();
const port = 3000;
const textEdit = require('./script');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.get('/', (req, res) => {
    res.send('Hi, this site for refactor your text!');
})

app.post('/text', jsonParser, (req, res) => {
res.send(textEdit(req.body.size, req.body.lang, req.body.format));
});

app.listen(port, () => {
    console.log(`Application TextEdit listening at http://localhost:${port}`);
});