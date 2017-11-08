module.exports = function (app) {
    app.get('/', (req, res) => {
        res.send('index.html');
    });

    app.get('/about', (req, res) => {
        res.send('about.html');
    });
}
