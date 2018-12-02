const express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello Express!")
});


app.listen(PORT, () => {
    console.log(`Serving running on port ${PORT}`);
})
