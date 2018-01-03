const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('pages/index')
});

app.get('/about', (req, res) => {
    res.render('pages/about')
});

app.get('/files/basicbot.zip', (req, res) => {
    res.download('../files/basicbot.zip')
});

app.listen(port, () => {
    console.log('Our app is running on http:localhost:' + port)
});