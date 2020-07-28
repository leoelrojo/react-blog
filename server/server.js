const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');
const multiparty = require('connect-multiparty');
const MultipartyMiddleware = multiparty({uploadDir:'../public/images/uploads'});
const morgan = require('morgan');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.post('/upload', MultipartyMiddleware, (req, res) => {
    console.log(req.files.upload);
})

app.listen(port, () => {
    console.log('Server is up!');
});