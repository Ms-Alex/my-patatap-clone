const express = require('express');
const ejs = require('ejs');

var app = express();
var PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(PORT, () => {
    console.log(`Serving running on port ${PORT}`);
})

