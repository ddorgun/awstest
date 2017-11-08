const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html');
    //res.status(200);
    //res.type('text/html');
    //res.sendFile('index.html', {root: './views'});
});

router.get('/about', (req, res) => {
    res.render('about.html');
});

module.exports = router;
